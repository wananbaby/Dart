//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageWidth:10000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.playBackgroundAudio({
      dataUrl: 'https://nx01-sycdn.kuwo.cn/0e28ee647d192951507d13f8c827ad60/5eddb11a/resource/n2/36/44/1478416719.mp3'
    });
    var that = this;
    that.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
      imageHeight: (wx.getSystemInfoSync().windowHeight)*2
    });
    console.log(that.data.imageWidth);
    console.log(that.data.imageHeight);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const ctx = wx.createCanvasContext('firstCanvas');
    ctx.setFillStyle('#24c9cc');
    var that =  this;
    ctx.fillRect(0, 20,that.data.imageWidth,that.data.imageHeight);
    ctx.draw() 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})