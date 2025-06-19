
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfoli/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfoli"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17254, hash: '298d4a7b7b1f9ccaa3eead6adc9704af605845fc2f05f2d5d6c0d508169743a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16978, hash: '0abd72263557b6777004eb1b0c9c0d38eb430fad93b4a3ae92636a765596ff19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40170, hash: '178cf68d4ed88877535726a2a1fcc6d2ab6d783375d8e7c0385db1dae0ecf5bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AZHLLXQH.css': {size: 7050, hash: 'iSZv2ZpiWUY', text: () => import('./assets-chunks/styles-AZHLLXQH_css.mjs').then(m => m.default)}
  },
};
