// pages/multi/multi.js
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

    nineblocks: [ 
      [ 
      ['https://d3r6kbofdnmd8.cloudfront.net/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/9/8/98876_Bombay-Sapphire-London-Dry-Gin-10L-47-Vol_4.jpg', 'Gin', false], 

    ['https://media-verticommnetwork1.netdna-ssl.com/wines/absolut-vodka-350ml-1195115.jpg','Vodka', false],
    
    ['https://specsonline.com/wp-content/uploads/2018/09/008048001540.jpg','Light Rum', false],

  ['https://cdn.shopify.com/s/files/1/0069/6467/4613/products/a9b2fb0ad5854d3d4cd4b872e5b53ba7_1200x1200.jpg?v=1591203093', 'Sugar', false],

  ['https://nationaltoday.com/wp-content/uploads/2019/08/national-lemon-juice-day.jpg','Lemon', false],

  ['https://cdn.enterwine.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/j/a/jack-daniels.jpg', 'Whisky', false],

  ['https://target.scene7.com/is/image/Target/GUEST_d14cb77d-252e-4ed7-a8e2-34039c2c36b5?wid=488&hei=488&fmt=pjpeg','Dark Rum', false],

  ['https://www.freshfruitportal.com/assets/uploads/2016/04/Lima-shutterstock_135849644-npanorama-1024x683.jpg', 'Lime', false],

  ['https://cdn.shoplightspeed.com/shops/609238/files/3155755/patron-silver-tequila-proof-80-50-ml.jpg','Tequila', false] 
],

[ 
  ['https://d3r6kbofdnmd8.cloudfront.net/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/9/8/98876_Bombay-Sapphire-London-Dry-Gin-10L-47-Vol_4.jpg', 'Gin', false], 

['https://media-verticommnetwork1.netdna-ssl.com/wines/absolut-vodka-350ml-1195115.jpg','Vodka', false],

['https://specsonline.com/wp-content/uploads/2018/09/008048001540.jpg','Light Rum', false],

['https://cdn.shopify.com/s/files/1/0069/6467/4613/products/a9b2fb0ad5854d3d4cd4b872e5b53ba7_1200x1200.jpg?v=1591203093', 'Sugar', false],

['https://nationaltoday.com/wp-content/uploads/2019/08/national-lemon-juice-day.jpg','Lemon', false],

['https://cdn.enterwine.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/j/a/jack-daniels.jpg', 'Whisky', false],

['https://target.scene7.com/is/image/Target/GUEST_d14cb77d-252e-4ed7-a8e2-34039c2c36b5?wid=488&hei=488&fmt=pjpeg','Dark Rum', false],

['https://www.freshfruitportal.com/assets/uploads/2016/04/Lima-shutterstock_135849644-npanorama-1024x683.jpg', 'Lime', false],

['https://cdn.shoplightspeed.com/shops/609238/files/3155755/patron-silver-tequila-proof-80-50-ml.jpg','Tequila', false] 
],
[ 
  ['https://d3r6kbofdnmd8.cloudfront.net/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/9/8/98876_Bombay-Sapphire-London-Dry-Gin-10L-47-Vol_4.jpg', 'Gin', false], 

['https://media-verticommnetwork1.netdna-ssl.com/wines/absolut-vodka-350ml-1195115.jpg','Vodka', false],

['https://specsonline.com/wp-content/uploads/2018/09/008048001540.jpg','Light Rum', false],

['https://cdn.shopify.com/s/files/1/0069/6467/4613/products/a9b2fb0ad5854d3d4cd4b872e5b53ba7_1200x1200.jpg?v=1591203093', 'Sugar', false],

['https://nationaltoday.com/wp-content/uploads/2019/08/national-lemon-juice-day.jpg','Lemon', false],

['https://cdn.enterwine.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/j/a/jack-daniels.jpg', 'Whisky', false],

['https://target.scene7.com/is/image/Target/GUEST_d14cb77d-252e-4ed7-a8e2-34039c2c36b5?wid=488&hei=488&fmt=pjpeg','Dark Rum', false],

['https://www.freshfruitportal.com/assets/uploads/2016/04/Lima-shutterstock_135849644-npanorama-1024x683.jpg', 'Lime', false],

['https://cdn.shoplightspeed.com/shops/609238/files/3155755/patron-silver-tequila-proof-80-50-ml.jpg','Tequila', false] 
],
], 
  
  },



  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let lastPage = getCurrentPages().slice(-2, -1)[0]
    let lastPageData = lastPage.data
      this.setData ({
      lastPageData: lastPageData
    })
  },
  selectMultiple: function(e) {
    console.log(e)
    let id1 = e.currentTarget.dataset.id1
    let id2 = e.currentTarget.dataset.id2
    let nineblocks = this.data.nineblocks
    nineblocks[id1][id2][2] = !(nineblocks[id1][id2][2])
    this.setData({
      nineblocks: nineblocks
      });
    console.log(this.data.nineblocks[e.currentTarget.dataset.id1][e.currentTarget.dataset.id2][2])
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

  }
})