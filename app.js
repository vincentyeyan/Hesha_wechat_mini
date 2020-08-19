const AV = require('./utils/av-weapp-min.js')
const config = require('./key')
AV.init({
  appId: config.appId,
  appKey: config.appKey,
  serverURLs: "https://hesha.wogengapp.cn/api/v1"
});
App({
  onLaunch: function () {
    wx.login({
      success: (res) => {
        console.log('login', res)
      wx.request({

        //url: "https://hesha.wogengapp.cn/api/v1/login",
         url: "http://localhost:3000/api/v1/login",

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
    userId: null,

    base_url: "http://localhost:3000/api/v1"
    //base_url: "https://hesha.wogengapp.cn/api/v1" 
    }
})



