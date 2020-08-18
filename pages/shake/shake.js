// pages/shake/shake.js
// var socketOpen = false;
// var count = 0;
// var SocketTask;
// var url = 'xxxx';
const app = getApp()
const base_url = app.globalData.base_url;
Page({

  /**
   * Page initial data
   */
  data: {
  
    shakeY: false

  },

  /**
   * Lifecycle function--Called when page load
   */
  selectAnimate(e){
    this.setData({
        shakeY: true
    })
},
  onLoad: function (options) {
    
    let page = this
    wx.onAccelerometerChange(function (e) {
      if (e.x > .3 && e.y > .3) {
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
        page.selectAnimate()
        setTimeout(function () {
          console.log('inside setTImeout') 
          wx.navigateTo({
            url: `/pages/recipe/recipe?id=${page.data.rand}`,
          })
          page.setData({
            shakeY: false
        })
         }, 4000) 
       
      }
    });
  },


  // gotoShow: function () {
  //   const page = this
  //   wx.request({
  //     url: `${base_url}/recipes/shaking`,
  //      method: 'GET',
  //      success(res) {
  //       const rand = res.data.id;
  //        page.setData({
  //          rand: rand,
  //        });
  //       }
  //     })
  //     setTimeout(function () {
  //       console.log('inside setTImeout') 
  //       wx.navigateTo({
  //         url: `/pages/recipe/recipe?id=${page.data.rand}`,
  //       })
  //      }, 2000) 
  // },




  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
   
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
   
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

