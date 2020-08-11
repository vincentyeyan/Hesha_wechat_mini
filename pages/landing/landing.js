// pages/posts/posts.js
const app = getApp()
const base_url = app.globalData.host;
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

  },
  GoToRecipe: function(){
    wx.navigateTo({
      url: '../recipe/recipe'
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
    const page  = this
    wx.request({
      // url: `${base_url}/posts`,
      method: 'GET',
      success(res) {
        console.log('in show', res)
        const posts = res.data;
        page.setData({
          posts: posts,
        });
        console.log(posts)
      }
    })
  },
  goToShowPost: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      // url: `/pages/post/post?id=${id}`,
    })
  },
  GoToSearch: function (e) {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
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