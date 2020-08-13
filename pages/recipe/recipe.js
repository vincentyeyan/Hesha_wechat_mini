// pages/recipe/recipe.js
const app = getApp()
const base_url = app.globalData.base_url;
Page({

  

  /**
   * Page initial data
   */
  data: {
  },


  onShareAppMessage(){
    // return {
    //   title: "Have a look at this!",
    //   desc: "Let's learn how to make it",
    //   path: "/pages/post/post"
  },


onShareAppMessage: function (res) {
  //可以先看看页面数据都有什么，得到你想要的数据
var shareData = this.data
console.log(res)

if (res.from === 'image') {

  // 来自页面内转发按钮
  return {
    title: "Have a look at this!",
    desc: "Let's learn how to make it",
    path: "/pages/post/post",
    imageUrl: "/images/HESHAbanner.png"
  }
}

return {
  title: "Have a look at this!",
  desc: "Let's learn how to make it",
  path: "/pages/post/post",
  imageUrl: "/images/HESHAbanner.png",

  success: function (res) {
    // 转发成功
    console.log("转发成功:" + JSON.stringify(res));
  },
  fail: function (res) {
    // 转发失败
    console.log("转发失败:" + JSON.stringify(res));
  }

    }
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
    const page = this
    wx.request ({
      url: `${base_url}/recipes/${options.id}`,
      method: 'GET',
      success(res) {
      const recipe = res.data;
      console.log
      page.setData({
          recipe: recipe,
        })
      }
    })

    },

    goToPopup: function(e) {
      let id = this.data.recipe.id
      console.log(id)
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