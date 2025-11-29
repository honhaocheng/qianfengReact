import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 不要用配置式的，就注释下面的代码
  // 配置式的路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  history: {
    type: 'hash'
  },

  proxy: {
    '/api': {
      target: 'https://i.maoyan.com',
      changeOrigin: true
    }
  },

  // 把自带antd这个插件集中的这个mobile这个插件给关掉，这样走的就是我自己安装的这个最新5版本
  antd: {
    mobile: false
  }
});
