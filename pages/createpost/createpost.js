// pages/createpost/createpost.js
const app = getApp()
const base_url = app.globalData.base_url;
Page({

  /**
   * Page initial data
   */
  data: {
    array: ["Shanghai", "Taipei", "Hong Kong", "Xi'an", "Beijing", "Tianjin", "Haerbin", "Gaoxiong", "Pingdong"],
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
    // wx.navigateTo({
    //   url: '../camera/camera',
    // })
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
  takePhoto() {
    wx.chooseImage({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempFilePaths
        })
      }
      })
  },
  formSubmit() {
    wx.navigateTo({
      url: '../post/post',
    })
  }
})