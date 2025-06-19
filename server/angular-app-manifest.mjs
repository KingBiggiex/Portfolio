
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17255, hash: '3436970a8822c726b7d82ef09a7c23fc7010973090881a51e468563f94517eff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16979, hash: '0230a0d4da7fe5561868621bddb222bccf8f22c2581879fc0aa66acc81eaf7db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40171, hash: '46dcb1b553e3d6a5de2e29afdda194b7bfa7340d96e94cc6beaa9477c56969c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AZHLLXQH.css': {size: 7050, hash: 'iSZv2ZpiWUY', text: () => import('./assets-chunks/styles-AZHLLXQH_css.mjs').then(m => m.default)}
  },
};
