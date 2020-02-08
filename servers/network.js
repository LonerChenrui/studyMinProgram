const baseUrl1 = "http://106.54.54.237:8000/api/hy";
const baseUrl2 = "http://123.207.32.32:8000/api/hy";

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