// pages/recipe/recipe.js
const app = getApp();
const base_url = app.globalData.base_url;
let likeList = app.globalData.likeList;
Page({
  /**
   * Page initial data
   */
  data: {
    hidden: false,
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    liked: false,

  },
  likeRecipe: function(){
    let page = this;
    const id = page.data.recipe.id;
    if (likeList.includes(id)) {
      const index = likeList.indexOf(id);
      if (index > -1) {
        likeList.splice(index, 1);
      }
    }
    else {
      likeList.push(id);
    }
    console.log(likeList)


    let recipe = page.data.recipe;
    let userId = app.globalData.userId
    console.log(userId)
    wx.request({
      url: `${base_url}/recipes/${recipe.id}/toggle_favorite?user_id=${userId}`,
      method: 'GET',
      success(res) {
        console.log(111,res)
        const recipe = res.data;
        page.setData({
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
      console.log(res)
      const recipe = res.data.recipe;
      const posts = res.data.posts
      page.setData({
          recipe: recipe,
          posts: posts
        })
        if (likeList.includes(page.data.recipe.id)){
          page.setData({
            liked: true
          })
        }
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
    wx.navigateTo({
      url: '../createpost/createpost',
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
    return{
      title:"Check out this cocktail on 喝啥"
    }

  }
})