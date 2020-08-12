// pages/recipe/recipe.js
const app = getApp()
// const base_url = app.globalData.host;
const recipes = app.globalData.recipes;
Page({

  

  /**
   * Page initial data
   */
  data: {
    liked: false
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

if (res.from === 'button') {
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
      this.setData({
        liked: true
      })
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