// pages/upload/upload.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    picPaths:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  chooseimage: function() {
    var that = this;
    wx.wx.showActionSheet({
      itemList: ['从相册中选择','拍照'],
      itemColor: '#000000',
      success: (result) => {
        if (!result.cancel) {
          if (result.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (result.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      },
    })
  },
  chooseWxImage: function (type) {
    var that = this;
    var imgsPaths = that.data.imgs;
    wx.chooseImage({
      sizeType: ['original','compressed'],
      sourceType: [type],
      success: function (result) {
        console.log(result.tempFilePaths[0]);
        that.upImgs(result.tempFilePaths[0], 0)
      }
    })
  },
  upImgs: function (imgurl, index) {
    var that = this;
    wx.uploadFile({
      url: 'https://xxxxxxxxxxxxxxxxxxxxxxxxxxxx',//
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: null,
      success: function (res) {
        console.log(res) //接口返回网络路径
        var data = JSON.parse(res.data)
          that.data.picPaths.push(data['msg'])
          that.setData({
            picPaths: that.data.picPaths
          })
          console.log(that.data.picPaths)
      }
    })
  },
})