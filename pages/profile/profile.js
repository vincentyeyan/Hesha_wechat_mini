// pages/profile/profile.js
const app = getApp()
const base_url = app.globalData.base_url;
Page({
  /**
   * Page initial data
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
    
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
    let userInfo = e.detail.userInfo
    this.setData(userInfo)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },
  GoToRecipe: function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../recipe/recipe?id=${id}`
    })
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    let page = this
    wx.request({
      url: `${base_url}/recipes`,
      method: 'GET',
      success(res) {
        const recipes = res.data.recipes; //array of hashes
        // console.log(1221,recipes)
        const likedRecipes = []
        recipes.forEach((recipe) => {
          if (recipe.liked == true) {
            likedRecipes.push(recipe);
          }
        })
        page.setData({
          recipes: likedRecipes
        });
      }
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