// pages/posts/posts.js
const app = getApp()
const base_url = app.globalData.base_url;
const DEFAULT_PAGE = 0;
Page({
  tempFilePaths: '',
  startPageX: 0,
  currentView: DEFAULT_PAGE,

  /**
   * Page initial data
   */
  data: {
    toView: `card_${DEFAULT_PAGE}`
   },
  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },
 
  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 150){
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },

  GoToRecipee:function(){
    wx.request({
      url: `${base_url}/recipes?query=${item}`,
       method: 'GET',
       success(res) {
         const recipes = res.data;
         page.setData({
           recipes: recipes,
           keywords: keywords
         });
         wx.navigateTo({
          url: '/pages/multiSearch/multiSearch'
      })
        }
      })

  },
   
    // Lifecycle function--Called when page load
   
  onLoad: function (options) {
    const page = this
    wx.request({
    url: `${base_url}/tagged`,
    method: 'GET',
    success(res) {
    console.log(9987,res)
    // const bitters = res.data.Bitter;
    page.setData({recipes: res.data,
      bitters : res.data.Bitter,
      sours : res.data.Sour,
      classics : res.data.Classic,
      fizzys : res.data.Fizzy,
      fruitys : res.data.Fruity
    })
    
    }
    })
    },
    
    
  GoToRecipe: function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../recipe/recipe?id=${id}`
    })
  },
  GoToMulti: function(event){
    wx.switchTab({
      url:  '/pages/multi/multi'
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
  goToRecipe: function (e) {
    console.log(999,e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/recipe/recipe?id=${id}`,
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