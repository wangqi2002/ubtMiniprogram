const app = getApp()
Page({
  data: {
    des: '本程序由原生小程序开发，数据存储及相关支付等处理全部使用小程序云开发功能，全套程序已开源在Github主页。\n\n部署本程序前，建议了解小程序云开发的使用。\n\n开发此程序的初衷仅为解决校园二手书问题，灵感的起源，来自朋友圈学弟们的卖书说说，知识无价，希望每门书都能实现最大的价值，找到自己最好的归宿'
  },

  copy(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.copy,
      success: res => {
        wx.showToast({
          title: '复制' + e.currentTarget.dataset.name + '成功',
          icon: 'success',
          duration: 1000,
        })
      }
    })
  },

  onLoad(options) {

  },
})