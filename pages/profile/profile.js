// pages/profile/profile.js
const app = getApp()
const base_url = app.globalData.base_url;
Page({
  /**
   * Page initial data
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false
  },
  onLoad: function() {
    this.getUserInfo()
  },

  getUserInfo() {
    let page = this
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              page.setData({ hasUserInfo: true })
              console.log(1149,res)
              console.log(1145,res.userInfo)
              let userInfo = res.userInfo
              page.setData({
                userInfo:userInfo
                // userNickName:nickName,
                // avatarUrl:avatarUrl
              })
            }
          })
        }
      }
    })
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
    let userId = app.globalData.userId
    console.log(996,userId)
    wx.request({
      url: `${base_url}/profile?user_id=${userId}`,
      method: 'GET',
      success(res) {
        const recipes = res.data; //array of hashes
        page.setData({
          recipes: recipes
        });
      },
    })
  },
   


  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  }

})