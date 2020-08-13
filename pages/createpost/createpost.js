// pages/createpost/createpost.js
const app = getApp()
const base_url = app.globalData.base_url;
Page({
  tempFilePaths: '',
  /**
   * Page initial data
   */
  data: {
    array: ["Mojito recipe", "Rhubarb Gin", "Easy sangria", "Espresso martini", "New York sour", "Sex on the beach cocktail", "Pink gin iced tea", "Hurricane Cocktail", "Pink negroni"],
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
  chooseimage: function chooseimage() {
    var _this = this;
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function success(res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        });
        _this.setData({
          tempFilePaths: res.tempFilePaths
        });
        console.log(res.tempFilePaths);
      }
    });
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