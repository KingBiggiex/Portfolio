
export default {
  basePath: 'https://KingBiggiex.github.io/Portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
