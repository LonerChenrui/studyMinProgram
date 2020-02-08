// pages/home/children/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabControlTitle: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    controlClick(event) {
      // console.log(this.data.tabControlTitle)
      this.setData({
        currentIndex: event.currentTarget.dataset.idx
      })
      this.triggerEvent("goodsTypeEvent", { currentIndex: this.data.currentIndex},{})
    }
  }
})
