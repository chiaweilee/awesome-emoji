// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'awesome-emoji'
    }
  },
  productionSourceMap: false// ,
  // runtimeCompiler: true // to use the template option in Vue components, extra 10kb payload
}
