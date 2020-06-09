// pages/upload/upload.js

//Page Object
Page({
    data: {
        imgs: []
    },

    chooseImg: function (e) {
        var that = this;
        var imgs = this.data.imgs;
        if (imgs.length >= 9) {
          this.setData({
            lenMore: 1
          });
          setTimeout(function () {
            that.setData({
              lenMore: 0
            });
          },2500);
          return false;
        }
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function(res) {
            var tempFilePaths = res.tempFilePaths;
            var imgs = that.data.imgs;
            for (var i = 0;i < tempFilePaths.length; i++) {
              if (imgs.length >= 9) {
                that.setData({
                  imgs: imgs
                });
                return false;
              } else {
                imgs.push(tempFilePaths[i]);
              }
            }
            that.setData({
              imgs: imgs
            });
          }
        }); 
      },
    deleteImg: function (e) {
        var imgs = this.data.imgs;
        var index = e.currentTarget.dataset.index;
        imgs.splice(index, 1);
        this.setData({
          imgs: imgs
        });
    }, 
      // 预览图片
    previewImg: function (e) {
        //获取当前图片的下标
        var index = e.currentTarget.dataset.index;
        //所有图片
        var imgs = this.data.imgs;
        wx.previewImage({
          //当前显示图片
          current: imgs[index],
          //所有图片
          urls: imgs
        })
    },
    upImg: function(e) {
        //上传图片
        const filePath = this.data.imgs;
        wx.uploadFile({
          url: 'http://jianpin.51vip.biz/yiyi/uploadImg',
          filePath: filePath,
          name: 'file',
          formData: {},
          success: (res) => {
            if (res.hasError) {
              wx.showToast({
                title: res.data,
                icon: 'none',
                duration: 1500
              });  
            } else {
              wx.showToast({
                title: '成功',
                icon: 'none',
                duration: 2000
              });
            }
          },
          fail: () => {
            wx.showToast({
              title: '失败',
              icon: 'none',
              duration: 2000
            });
          }
        }); 
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

    }
});