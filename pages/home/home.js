// pages/home/home.js
import { 
  getHomeMuilt, 
  getGoodsData
} from '../../servers/home.js'

Page({
  data: {
    bannerList: [],
    recommend: [],
    tabControlTitle: ["流行", "新款","精选"],
    goods: {
      pop: {page: 0,list:[]},
      new: {page: 0,list:[]},
      sell: {page: 0,list:[]}
    },
    goodsType: 'pop',
    goodsTypeArray: ['pop', 'new', 'sell']
  },
  onLoad: function(options) {
    // 轮播、推荐
    this.getHomeMuilt();
    // 商品数据
    this.getGoodsData('pop');
    this.getGoodsData('new');
    this.getGoodsData('sell');
  },
  //---------------网络请求
  getHomeMuilt() {
    getHomeMuilt().then(res => {
      let result = res.data.data;
      this.setData({
        bannerList: result.banner.list,
        recommend: result.recommend.list
      })
    })
  },
  getGoodsData(type) {
    let page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      let list = res.data.data.list;
      let vldValue = this.data.goods[type].list;
      vldValue.push(...list)
      this.setData({
        [`goods.${type}.page`]: page,
        [`goods.${type}.list`]: vldValue
      })
    })
  },
  //-------------- 事件监听函数
  goodsTypeEvent(e) {
    this.setData({
      goodsType: this.data.goodsTypeArray[e.detail.currentIndex]
    })
  },
  onReachBottom() {
    console.log()
    this.getGoodsData(this.data.goodsType)
  }
})