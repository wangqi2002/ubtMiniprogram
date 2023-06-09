// pages/recharge/recharge.js
const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        num: ''
    },
    //金额输入，因为js对小数乘除很容易出问题，所以干脆就取整
    numInput(e) {
        this.data.num = e.detail.value
    },
    //支付提交
    paypost() {
        let that = this;
        let num = that.data.num;
        if (!num > 0) {
            wx.showToast({
                title: '请输入金额',
                icon: 'none'
            })
            return false;
        }
        // wx.showLoading({
        //     title: '正在充值',
        // });
        // // 利用云开发接口，调用云函数发起订单
        // wx.cloud.callFunction({
        //     name: 'pay',
        //     data: {
        //         $url: "recharge", //云函数路由参数
        //         num: num
        //     },
        //     success: res => {
        //         console.log(res)
        //         wx.hideLoading();
        //         that.pay(res.result, num)
        //     },
        //     fail(e) {
        //         wx.hideLoading();
        //         wx.showToast({
        //             title: '充值失败，请及时反馈或稍后再试',
        //             icon: 'none'
        //         })
        //     }
        // });
    },
    //实现小程序支付
    pay(payData, num) {
        let that = this;
        //官方标准的支付方法
        wx.requestPayment({
            timeStamp: payData.timeStamp,
            nonceStr: payData.nonceStr,
            package: payData.package, //统一下单接口返回的 prepay_id 格式如：prepay_id=***
            signType: 'MD5',
            paySign: payData.paySign, //签名
            success(res) {
                that.up(num);
            },
        })
    },
    //刷新余额
    up(num) {
        let that = this;
        // wx.cloud.callFunction({
        //     name: 'his',
        //     data: {
        //         $url: "recharge", //云函数路由参数
        //         num: num
        //     },
        //     success(e) {
        //         wx.showToast({
        //             title: '充值成功',
        //             icon: 'success',
        //         })
        //         that.history('钱包充值', num, 1);
        //     },
        //     fail(e) {
        //         wx.showToast({
        //             title: '发送错误，请联系管理员',
        //             icon: 'none'
        //         })
        //     }
        // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})