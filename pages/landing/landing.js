// pages/posts/posts.js
const app = getApp()
const base_url = app.globalData.base_url;

Page({
  tempFilePaths: '',

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
    url: `${base_url}/posts`,
    method: 'GET',
    success(res) {
    console.log(res)
    const posts = res.data;
    page.setData({
    posts: posts,
    });
    }
    })
    },
  chooseImage: function() {
      var page = this;
      wx.chooseImage({
        count: 1, 
        sizeType: ['original', 'compressed'], 
        sourceType: ['album', 'camera'], 
        success: function(res) {
          wx.showToast({
            title: 'Uploading..',
            icon: '../images/cocktail-2.png',
            mask: true,
            duration: 1000
          });
          page.setData({
            tempFilePaths: res.tempFilePaths
          });
          console.log(1998,res.tempFilePaths);
        },
    });
  },
  // previewImg: function (e) {
  //   //获取当前图片的下标
  //   var index = e.currentTarget.dataset.index;
  //   //所有图片
  //   var source = this.data.source;
  //   wx.previewImage({
  //     //当前显示图片
  //     current: source[index],
  //     //所有图片
  //     urls: source
  //   })
  // },

    // previewMyImage: function(files) {
    //   wx.previewImage({
    //     current: '',  // number of index or file path
    //     urls: this.data.tempFilePaths  // Array of temp files
    //   })
    //   console.log(this.data.tempFilePaths)
    // },
    
    
  GoToRecipe: function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../recipe/recipe?id=${id}`
    })
  },
  GoToMulti: function(event){
    wx.navigateTo({
      url: '/pages/multi/multi'
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



  goToPost: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/post/post?id=${id}`,
    })
  },

  onShareAppMessage(){
    // return {
    //   title: "Have a look at this!",
    //   desc: "Let's learn how to make it",
    //   path: "/pages/post/post"
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

  GoToSearch: function (e) {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
  },

})