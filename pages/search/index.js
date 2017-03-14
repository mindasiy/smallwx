const App = getApp()

Page({
    data: {
        inputVal: ''
    },
    clearInput() {
        this.setData({
            inputVal: ''
        })
    },     
    redirectTo(e) {
        wx.redirectTo({url:"/pages/goods/detail/index"})           
    },
})