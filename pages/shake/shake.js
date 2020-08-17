// pages/shake/shake.js
var socketOpen = false;
var count = 0;
var SocketTask;
var url = 'xxxx';
const app = getApp()
const base_url = app.globalData.base_url;
Page({

  /**
   * Page initial data
   */
  data: {
    hasResutl:-1,
    bar_state:0,
    winWidth:0,
    winHeight:0,
    img_url:"https://www.demomaster.cn/eatbar/public/static/img/yaoyiyao/img_yaoyiyao.png",
    loading:"https://www.demomaster.cn/eatbar/public/static/img/yaoyiyao/small_loading.gif"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let context = wx.createContext()
    context.rect(5, 5, 25, 15)
    context.stroke()
    context.drawImage()
    wx.drawCanvas({
      canvasId: 'myCanvas',
      actions: context.getActions()
    })
    var that = this;
	// 监听协议
    SocketTask.onOpen(res => {
      socketOpen = true;
      console.log('监听 WebSocket 连接打开事件。', res)
    })
    SocketTask.onClose(onClose => {
      console.log('监听 WebSocket 连接关闭事件。', onClose)
      socketOpen = false;
      that.webSocket()
    })
    SocketTask.onError(onError => {
      console.log('监听 WebSocket 错误。错误信息', onError)
      socketOpen = false
    })
    SocketTask.onMessage(res => {
      console.log('监听 WebSocket 连接打开事件。', res) 
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    let page = this;
    page.initAnimation();
    wx.onAccelerometerChange(function (res) {
      if (res.x > .7 && res.y > .7) {
        page.startAnimation();
        page.vibrateShort();
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        page.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.downloadFile({
      url: page.data.img_url,
      success: function (sres) {
        console.log(sres);
      }, fail: function (fres) {
 
      }
    })
  },
  initAnimation: function () {
    let page = this;
    this.animation1 = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
    this.animation2 = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
  },
  startAnimation: function () {
   
    let page = this
    let h1 = "35%";
    let h2 = "65%";
    if (this.data.bar_state == 1) {
      h1 = "40%";
      h2 = "40%";
      setTimeout(function () {
        page.setData({
          bar_state: 0,
          hasResutl:0
        })
        setTimeout(function () {
          page.setData({
            hasResutl: 1
          })
        }, 1000)
      }, 400)
    } else {
      h1 = "25%";
      h2 = "55%";
      this.setData({
        bar_state: 1
      })
      setTimeout(function () {
        page.startAnimation();
      }, 600)
    }
    this.animation1.height(h1).step()
    this.animation2.top(h2).step()
    this.setData({
      animation1: page.animation1.export(),
      animation2: page.animation2.export()
    })    
    var that = this;  
    that.initAnimation();
    //开始监听加速度数据
    wx.startAccelerometer({
      interval: 'ui'
    });
    let rand = Math.floor(Math.random() * 78) + 1;
    console.log(rand)
    wx.request({
      url: `${base_url}/recipes/${rand}`,
       method: 'GET',
       success(res) {
         const recipe = res.data;
         page.setData({
           recipe: recipe.recipe,
         });
        }
      })
      // console.log(333,this.data.recipe)
    //监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听
    wx.onAccelerometerChange(function (e) {
      if (e.x > .7 && e.y > .7) {
        ++count;
        if(count%2==0){
          setTimeout(function () {
             that.shake();
          }, 400);
		  that.sendSocketMessage();
		  console.log(count);
        }        
      }
    });
    // if (!socketOpen) {
    //   that.webSocket()
    // }	
  
  },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    SocketTask.close(function (close) {
      console.log('关闭 WebSocket 连接。', close)
  })		 
  //停止监听加速度数据 
  wx.stopAccelerometer();

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    wx.stopAccelerometer();
  },

  goToView: function (e) {
      let id = e.currentTarget.dataset.id
      console.log(e)
      wx.navigateTo({
        url: `/pages/recipe/recipe?id=${id}`,
      })
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  
})