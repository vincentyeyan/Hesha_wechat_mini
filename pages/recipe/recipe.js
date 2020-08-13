// pages/recipe/recipe.js
const app = getApp();
const base_url = app.globalData.base_url;
Page({
  /**
   * Page initial data
   */
  data: {
  },
  // likeButton: function(){
  //   const recipes = app.globalData.recipes;
  //   let r = this.data.recipe
  //   r["liked"] = true
  //     this.setData({
  //       recipe: r
  //     })
  //     wx.setStorageSync('liked', true)
  // },
  likeRecipe: function(){
    let page = this;
    let recipe = page.data.recipe;
    let userId = app.globalData.userId
    wx.request({
      url: `${base_url}/recipes/id/toggle_favorite?user_id=${userId}`,
      method: 'GET',
      success(res) {
        console.log(111,res)
        const recipe = res.data;
        this.setData({
          liked: recipe.liked,
        });
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request ({
      url: `${base_url}/recipes/${options.id}`,
      method: 'GET',
      success(res) {
      const recipe = res.data;
      page.setData({
          recipe: recipe,
        })
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