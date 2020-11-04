import { defineConfig } from 'umi';

export default defineConfig({
  https: {
    key: "./key.pem",
    cert: "./cert.pem",
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
