
export default function request(option) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: (baseUrl1 || baseUrl2) + option.url,
      data: option.data || {},
      method: option.method || "get",
      success: resolve,
      fail: reject
    })
  })
}