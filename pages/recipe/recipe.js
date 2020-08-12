// pages/recipe/recipe.js
const app = getApp()
const recipes = app.globalData.recipes;
Page({

  /**
   * Page initial data
   */
  data: {
  },
  likeButton: function(){
    const recipes = app.globalData.recipes;
    let r = this.data.recipe
    r["liked"] = true
      this.setData({
        recipe: r
      })
      wx.setStorageSync('liked', true)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const recipes = app.globalData.recipes;
    let r = recipes.find((recipe) => recipe.id == options.id)
    this.setData({recipe: r})
    
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