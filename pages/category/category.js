// pages/category/category.js
const app = getApp()
const base_url = app.globalData.base_url
Page({

  /**
   * Page initial data
   */
  data: {

  },




findTag: function(e) {
  let tag = e.currentTarget.dataset.name
  let page = this
  wx.request({
  url: `${base_url}/tagged?tag=${tag}`,
   method: 'GET',
   success(res) {
     console.log(res)
     const tagResult = res.data;
     page.setData({
       tagResult: tagResult,
     });
    }
  })
  wx.navigateTo({
    url: `../singleTag/singleTag`
  })
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

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

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

  }
})