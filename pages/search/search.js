// pages/search/search.js
const app = getApp()
const base_url = app.globalData.base_url;

Page({

  /**
   * Page initial data
   */
  data: {

  },
  
 
    onLoad: function () {
  },
  
  
  onLoad: function (options) {

  },

  searchInput: function(e) {
    this.setData({
      searchKeyWord: e.detail.value
      // .split(" ")
    })
  },
  
  searchForm: function(e) {
    let page = this
    let word_arr = page.data.searchKeyWord
    wx.request({
    url: `${base_url}/recipes?query=${word_arr}`,
     method: 'GET',
     success(res) {
       const recipes = res.data;
       page.setData({
         recipes: recipes,
       });
      }
    })
   },

   goToRecipe: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/recipe/recipe?id=${id}`,
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