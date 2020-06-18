//index.js
//获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    motto: 'Hello World',
    userInfo: app.globalData.userInfo,
    hasUserInfo: app.globalData.hasUserInfo,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 800,
    biaoti: '',
    writer: '',
    wenben1: '',
    contentimg1: '',
    title1: '',
    wenben2: '',
    wenben3: ''
  },
  //options(Object)
  onLoad: function(options){

    var QueryOptlogcommRequest = {
      "companyId": 1,
      "opttimeFr": "2020-04-01",
      "opttimeTo": "2020-04-02",
      "paginationDTO": {
        "end": 0,
        "pageNumber": 1,
        "pageSize": 20,
        "start": 0,
        "totalCount": 102
      }
    }

    wx.request({
      url: 'http://10.32.0.139:80/logging/mgr/trips/logging/Optlogcomm/queryOptlogcommList',
      data: QueryOptlogcommRequest,
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'json',
      success: (result)=>{
        wx.showToast({
          title: result,
          icon: 'none',
          duration: 1500,
        });        
      },
      fail: ()=>{
        wx.showToast({
          title: '失败',
          icon: 'none',
          duration: 1500
        });  
      }
    });
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});

