App({
  onLaunch: function () {
    const base_url = 'http://localhost:3000/'
    wx.login({
      success: (res) => {
        console.log('code', res)
      // insert next code here
      wx.request({
        url: this.globalData.base_url + '/login',
        method: 'post',
        data: {
          code: res.code
        },
      // insert next code here
      success: (res) => {
      console.log('login res', res)
        this.globalData.userId = res.data.userId
      }
      })
      }
    })
  },
  globalData: {
    userInfo: null,
    // base_url: "http://localhost:3000/api/v1"
    base_url: "http://relatives-with-benefits.herokuapp.com/api/v1"
  },
})