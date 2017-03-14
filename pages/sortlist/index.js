//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  }, 
   search() {
        wx.redirectTo({url:"/pages/search/index"})  
    },
})
