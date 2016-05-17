module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'DriprViewer',
    jsNext: true,
    umd: true
  },
  babel: {
    stage: 0
  }
}
