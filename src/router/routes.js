import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'hotelPrice1',
        name: '套房一',
        meta: {
          title: '套房一',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'hotelPrice2',
        name: '套房二',
        meta: {
          title: '套房二',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'hotelPrice3',
        name: '套房三',
        meta: {
          title: '套房三',
          auth: true
        },
        component: _import('demo/page3')
      },
      {
        path: 'allOrders',
        name: '全部订单',
        meta: {
          title: '全部订单',
          auth: true
        },
        component: _import('orders/allOrders')
      },
      {
        path: 'refundOrders',
        name: '退款订单',
        meta: {
          title: '退款订单',
          auth: true
        },
        component: _import('orders/refundOrders')
      },
      {
        path: 'virtualOrders',
        name: '虚拟订单',
        meta: {
          title: '虚拟订单',
          auth: true
        },
        component: _import('orders/virtualOrders')
      },
      {
        path: 'offlineOrders',
        name: '线下订单',
        meta: {
          title: '线下订单',
          auth: true
        },
        component: _import('orders/offlineOrders')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
