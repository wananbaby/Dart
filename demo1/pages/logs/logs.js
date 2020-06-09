//logs.js
//Page Object
Page({
    data: {
        imgUrls: [
            'http://jianpin.51vip.biz/image/1.jpg',
            'http://jianpin.51vip.biz/image/2.jpg',
            'http://jianpin.51vip.biz/image/3.jpg',
            'http://jianpin.51vip.biz/image/4.jpg',
            'http://jianpin.51vip.biz/image/5.jpg',
            'http://jianpin.51vip.biz/image/6.jpg',
            'http://jianpin.51vip.biz/image/7.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 800,
        isShowUserPannel:false,
    },
    
    //options(Object)
    onLoad: function(options){
        
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

    },
    showUserPannel: function(){
        let isShow = this.data.isShowUserPannel
        if (!isShow) {
            isShow = true
        } else {
            isShow = false
        }
        this.setData({
            isShowUserPannel : isShow
        })
    }
})