App({
  onLaunch: function () {
   
    wx.login({
      success: (res) => {
        console.log('code', res)
      wx.request({
        url: this.globalData.base_url + '/login',
        method: 'post',
        data: {
          code: res.code
        },
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
    base_url: "http://localhost:3000/api/v1"
    //base_url: "https://hesha.wogengapp.cn/api/v1" 
    }
})



