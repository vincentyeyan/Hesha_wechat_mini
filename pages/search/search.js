// pages/search/search.js
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
  searchInput: function(e) {
    console.log(e)
    this.setData({
      searchKeyWord: e.detail.value
    })
  },
  searchForm: function(e) {
    let page = this
    let searchKeyWord = page.data.searchKeyWord
    wx.request({
    //  url: `${base_url}/cocktail?query=${searchKeyWord}`,
     method: 'GET',
     success(res) {
       const hosts = res.data;
       page.setData({
         cocktails: cocktails,
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