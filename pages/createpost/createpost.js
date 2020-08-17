// pages/createpost/createpost.js
const app = getApp()
const base_url = app.globalData.base_url;

Page({
  tempFilePaths: '',
  /**
   * Page initial data
   */
  data: {
  list: [],
  inputValue: null,
  resultList:[]
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
    let _this = this;
    wx.getStorage({
      key: 'historySearch',
      success(res) {
        _this.setData({
          list: res.data
        })
      }
    })
  },
  blur: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    this.search();
  },
  search:function(){
    var _this = this
    network.requestLoading('projectAppList', { projectName: this.data.inputValue }, '', function (res) {
      if (res.respState == 'S') {
        _this.setData({
          resultList: res.dtos
        })
      }

    }, function () {
      wx.showToast({
        title: '搜索失败',
        icon: 'none'
      })
    })
  },
  save: function () {
    var list = this.data.list;
    if (list.indexOf(this.data.inputValue) == -1 & this.data.inputValue != '') {
      list.push(this.data.inputValue);
    }
    this.setData({
      list: list
    })
    wx.setStorage({
      key: 'historySearch',
      data: list
    })
    
  },
  searchName: function (e) {
    this.setData({
      inputValue: e.currentTarget.dataset.value
    })
    this.search();
  },
  remove: function () {
    var _this = this;
    wx.showModal({
      title: '提示',
      content: '确认清空所有记录?',
      success(res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'historySearch',
            success() {
              _this.setData({
                list: []
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  clean:function(){
     var _this=this
    setTimeout(function () {
      _this.setData({
        inputValue: '',

      })
    },100)
  },
  detail: function (e) {
    this.save();
    wx.navigateTo({
      url: '../projectDetail/projectDetail?id=' + e.currentTarget.dataset.id,
    })

  },
  
  formSubmit: function(event) {
    console.log(181,event)
    let description = event.detail.value.description;
    let recipe = this.data.recipeId;
    let id = this.data.id;
    let post = {
      user_id: app.globalData.userId,
      recipe: recipe,
      description: description,
      recipe:recipe

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
  }
})