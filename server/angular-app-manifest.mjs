
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17245, hash: '3484a0f85dc51b0c32d884aed919ff068ff0a54cb43f9ac34309737c13f68ce2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16969, hash: '6a9f7811be254f69d691ed034893f833903fab0d0af8c8aa26734728071f023c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40161, hash: 'dbeafe4f4a348cfe98666b0981382028983f4bb2290fbeb1669caa86301606e0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AZHLLXQH.css': {size: 7050, hash: 'iSZv2ZpiWUY', text: () => import('./assets-chunks/styles-AZHLLXQH_css.mjs').then(m => m.default)}
  },
};
