
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://KingBiggiex.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17284, hash: '4f8c863e32b3ba9cb085773fc71f04b95430d9e09fd3cd6b7238e08f7de1ca42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17008, hash: 'a9edb9a8dd44e7994943f87250fc6c99badfe62d7685647cf45755813a7c09a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40200, hash: '7da84f25c5f41db9154c5c2ab6dfab365cf002f7606d3daf24192ad6de08c366', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AZHLLXQH.css': {size: 7050, hash: 'iSZv2ZpiWUY', text: () => import('./assets-chunks/styles-AZHLLXQH_css.mjs').then(m => m.default)}
  },
};
