import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home'

// const title = 'My Minimal React Webpack Babel Setup'

ReactDOM.render(<div><Home /></div>, document.getElementById('app'))

module.hot.accept()
