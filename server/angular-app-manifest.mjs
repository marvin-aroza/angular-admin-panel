
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-admin-panel/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/angular-admin-panel"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 462, hash: '936cd5a86637c8c080e75214d455d2d1fe80f5f6693c953c5ce7a02978a113bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: '150021193af472cb58da27eeed56cdcf18010df9f33e6ed68b811eba6f41b124', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
