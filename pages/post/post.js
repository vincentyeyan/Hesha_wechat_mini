// pages/post/post.js
const app = getApp()
const base_url = app.globalData.base_url
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page  = this
    wx.request({
      url: `${base_url}/posts/${options.id}`,
      method: 'GET',
      success(res) {
        const post = res.data;
        page.setData({
          post: post,
        });
      }
    })
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
    const page  = this
    wx.request({
      url: `${base_url}/posts`,
      method: 'GET',
      success(res) {
        const posts = res.data;
        page.setData({
          posts: posts,
        });
      }
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

  }
})