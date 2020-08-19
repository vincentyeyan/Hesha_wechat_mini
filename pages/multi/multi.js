// pages/multi/multi.js
const app = getApp()
const base_url = app.globalData.base_url;
Page({

  /**
   * Page initial data
   */
  data: {
    hidden: false,
    indicatorDots: true,
    autoplay: false,
    interval: 1700,
    duration: 800,

    nineblocks: [ 
      [ 
      ['https://tse4-mm.cn.bing.net/th/id/OIP.p5070SHMF2ragPFmoJEW7AHaFP?pid=Api&rs=1', 'Orange juice', false], 

    [ 'https://tse1-mm.cn.bing.net/th/id/OIP.BUJS5kJoFRXGpTTojez6zQHaHa?pid=Api&rs=1','Gin',false],
    
    [ 'https://tse3-mm.cn.bing.net/th/id/OIP.1BWnJ1a-3GUseskLiUqMBQHaEo?pid=Api&rs=1','Lime',false],

  ['https://www.webstaurantstore.com/images/products/main/80208/55987/bitters-angostura-4-oz-bottle.jpg', 'Bitters', false],

  ['https://tse3-mm.cn.bing.net/th/id/OIP.RMeLjwH_qLMAgtIY_N_pCwHaE8?pid=Api&rs=1','Mint', false],

  ['https://tse3-mm.cn.bing.net/th/id/OIP.GITHsbbHZV_a_5sZIt2pSgHaHa?pid=Api&rs=1', 'Vodka', false],

  ['https://tse3-mm.cn.bing.net/th/id/OIP.4944bzTWbqcUaQTYXkymAwHaHa?pid=Api&rs=1','Soda', false],

  ['https://tse4-mm.cn.bing.net/th/id/OIP.zyGhY_MkPIyzqHHYLrnF2wHaEK?pid=Api&rs=1', 'Lemon', false],

  ['http://www.halifaxdutyfree.ca/product_images/canadadutyfree/6001_L.jpg','Rum', false] 
],

[ 
  ['https://jumbocolombiafood.vteximg.com.br/arquivos/ids/179184-1000-1000/7501035010109.jpg?v=636124973472770000', 'Tequila', false], 

['https://tse1-mm.cn.bing.net/th/id/OIP.JWLgUxYsg0d4IntvYIrlVAHaHa?pid=Api&rs=1','Champagne', false],

['https://tse1-mm.cn.bing.net/th/id/OIP.jACUyr4vEzFskDUzszYwxwD6D6?pid=Api&rs=1','Whisky', false],

['https://tse1-mm.cn.bing.net/th/id/OIP.dYi9SJie6BpB2z4Vnw5UOAHaHa?pid=Api&rs=1', 'Sweet vermouth', false],

['https://tse4-mm.cn.bing.net/th/id/OIP.nzbPKuCK16WnpKT2_Kq3gwHaHa?w=206&h=206&c=7&o=5&dpr=2&pid=1.7','Tonic', false],

['https://tse2-mm.cn.bing.net/th/id/OIP.tLllggqvUbDgZLiG2BUf4QAAAA?pid=Api&rs=1', 'Triple sec', false],

['https://tse4-mm.cn.bing.net/th/id/OIP.mC7LmJBSyZkWd7LyMGsA3gAAAA?pid=Api&rs=1','Dry vermouth', false],

['https://tse2-mm.cn.bing.net/th/id/OIP.r3Z6A9GxydFrd7-JQ-DPwwHaHa?pid=Api&rs=1', '`Brandy', false],

['https://tse3-mm.cn.bing.net/th/id/OIP.97PzVjm2aUTvnShxyu-4rgHaHa?pid=Api&rs=1','Campari', false] 
],
// [ 
//   ['', 'Coffee liqueur', false], 

// ['','Orange juice', false],

// ['','Brandy', false],

// ['', 'Olives', false],

// ['','Sweet vermouth', false],

// ['', 'Campari', false],

// ['','Scotch', false],

// ['', 'Milk', false],

// ['','Pineapple juice', false] 
// ],
]
  
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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



  searchInput: function(e) {
    console.log(e)
    this.setData({
      searchKeyWord: e.detail.value
      // .split(" ")
    })
  },

  multiSearch: function(e) {
    const page = this
    var searchKeyword = ""
    const arrArr = page.data.nineblocks
    arrArr.forEach(function (item) {
      item.filter(item => item[2] === true)
     .forEach(item => searchKeyword += `${item[1]} ` )
    });
    var keywords = searchKeyword.split(" ")
    console.log(searchKeyword)
    wx.request({
    url: `${base_url}/recipes?query=${searchKeyword}`,
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