import request from './network'

export function getHomeMuilt() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(type,page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}