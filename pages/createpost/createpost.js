// pages/createpost/createpost.js
const app = getApp()
const base_url = app.globalData.base_url;
const AV = require('../../utils/av-weapp-min.js');

Page({
  tempFilePaths: '',
  /**
   * Page initial data
   */
  data: {
  list: [],
  inputValue: null,
  resultList:[],
  items: []
  },
  bindPickerChange: function (e) {
    const page = this
    const index = e.detail.value
    let recipeName = this.data.recipeNames[index]
    const key = Object.keys(this.data.arrayRecipes).find(key => this.data.arrayRecipes[key] === recipeName);
    page.setData({
      recipeId: key
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
      url: `${base_url}/recipes`,
      method: 'GET',
      success(res) {
        const recipes = res.data.recipes; //array of hashes
        // console.log(1221,recipes)
        const arrayRecipes = {}
        recipes.forEach(recipe => arrayRecipes[recipe.id] = recipe.name)
        // console.log(18888,arrayRecipes)
        page.setData({
          recipes: recipes,
          arrayRecipes:arrayRecipes,
          recipeNames: Object.values(arrayRecipes)
        });
      }
    })
  
  },
  formSubmit: function(event) {
    console.log(1891,event)
    let description = event.detail.value.description;
    let recipe = this.data.recipeId;
    let id = this.data.id;
    let image = event.detail.value.tempFilePaths
    let post = {
      user_id: app.globalData.userId,
      recipe: recipe,
      description: description,
      recipe:recipe,
      image:image
    }
    console.log(post)
    wx.request({
      url: `${base_url}/posts`,
      method: 'POST',
      data: post,
      success: (res) => {
        console.log('create', res)
        wx.redirectTo({
          url: '/pages/search/search'
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

  },
  takePhoto: function() {
    let page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        page.setData({
          tempFilePaths: res.tempFilePaths
        });
        let tempFilePath = res.tempFilePaths[0];
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => console.log(file.url())
        ).catch(console.error);
        
        
      }
      
    });
  }
})