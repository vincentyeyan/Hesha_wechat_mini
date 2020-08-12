// pages/posts/posts.js
const app = getApp()
// const base_url = app.globalData.host;
const base_url = app.globalData.base_url;
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
    const page = this
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
  GoToRecipe: function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../recipe/recipe?id=${id}`
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



  goToPost: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/post/post?id=${id}`,
    })
  },

  onShareAppMessage(){
    // return {
    //   title: "Have a look at this!",
    //   desc: "Let's learn how to make it",
    //   path: "/pages/post/post"
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

  },

  GoToSearch: function (e) {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
  },

})