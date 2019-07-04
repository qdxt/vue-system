// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '酒店管理',
    icon: 'building',
    children: [
      { path: '/hotelPrice1', title: '套房一', icon: 'building' },
      { path: '/hotelPrice2', title: '套房二', icon: 'building' },
      { path: '/hotelPrice3', title: '套房三', icon: 'building' }
    ]
  },
  {
    title: '酒店订单',
    icon: 'first-order',
    children: [
      { path: '/allOrders', title: '全部订单', icon: 'first-order' },
      { path: '/refundOrders', title: '退款订单', icon: 'first-order' },
      { path: '/virtualOrders', title: '虚拟订单', icon: 'first-order' },
      { path: '/offlineOrders', title: '线下订单', icon: 'first-order' }

    ]
  }
]
