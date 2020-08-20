const app = getApp()
const base_url = app.globalData.base_url;
Page({
  
  /**
   * Page initial data
   */
  data: {
    img_url:"../images/heshaker.png",
    shakeY: false,
    page: false,
    loading:"https://www.demomaster.cn/eatbar/public/static/img/yaoyiyao/small_loading.gif",
    button: false,

  },
  
  /**
   * Lifecycle function--Called when page load
   */
  selectAnimate(e){
    this.setData({
        shakeY: true
    })
},

  shake: function () {
    const page = this
    page.selectAnimate()
        wx.request({
          url: `${base_url}/recipes/shaking`,
           method: 'GET',
           success(res) {
            const rand = res.data.id;
             page.setData({
               rand: rand,
             });
            }
          })
        setTimeout(function () {
          console.log('inside setTImeout')
          page.setData({
            shakeY: false,
            page: true
        })
        wx.request({
          url: `${base_url}/recipes/${page.data.rand}`,
           method: 'GET',
           success(res) {
             page.setData({
               recipe: res.data.recipe,
             });
            }
          })
        page.initAnimation();
          setTimeout(function () {
            page.startAnimation();
            setTimeout(function () {
              page.setData({
                button: true
              })
            }, 2000)  
          }, 1000) 
         }, 2000) 
  },

  onLoad: function (options) {
    let page = this
    wx.onAccelerometerChange(function (e) {
      if (e.x > .3 && e.y > .3) {
        page.shake()
      }
    });
  },

  reShake: function(e) {
    this.setData({
      page: false,
      button: false
    })
  },

  goToShow: function(e) {
    const page = this
    wx.navigateTo({
      url: `/pages/recipe/recipe?id=${page.data.rand}`,
    })
  },


  onReady: function () {  
  },
  onShow: function () {
  },
  initAnimation: function () {
    var that = this;
    //实例化一个动画
    this.animation1 = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 400,
      /**
      * http://cubic-bezier.com/#0,0,.58,1 
      * linear 动画一直较为均匀
      * ease 从匀速到加速在到匀速
      * ease-in 缓慢到匀速
      * ease-in-out 从缓慢到匀速再到缓慢
      * 
      * http://www.tuicool.com/articles/neqMVr
      * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
      * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
      */
      timingFunction: 'ease',
      // 延迟多长时间开始
     // delay: 100,
      /**
      * 以什么为基点做动画 效果自己演示
      * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
      * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
      */
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
       
      }
    })
    //实例化一个动画
    this.animation2 = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 400,
      /**
      * http://cubic-bezier.com/#0,0,.58,1 
      * linear 动画一直较为均匀
      * ease 从匀速到加速在到匀速
      * ease-in 缓慢到匀速
      * ease-in-out 从缓慢到匀速再到缓慢
      * 
      * http://www.tuicool.com/articles/neqMVr
      * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
      * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
      */
      timingFunction: 'ease',
      // 延迟多长时间开始
      // delay: 100,
      /**
      * 以什么为基点做动画 效果自己演示
      * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
      * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
      */
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
  },
  startAnimation: function () {
    var that = this
    //x轴位移100px
    var h1 = "35%";
    var h2 = "65%";
    if (this.data.bar_state == 1) {
      h1 = "40%";
      h2 = "40%";
      setTimeout(function () {
        that.setData({
          //输出动画
          bar_state: 0,
          hasResutl:0
        })
        setTimeout(function () {
          that.setData({
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
        that.startAnimation();
      }, 600)
    }
    this.animation1.height(h1).step()
    this.animation2.top(h2).step()
    this.setData({
      //输出动画
      animation1: that.animation1.export(),
      animation2: that.animation2.export()
    })
    
  },

  
  // },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
  
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

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

