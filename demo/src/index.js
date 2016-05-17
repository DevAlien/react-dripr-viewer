import React from 'react'
import {render} from 'react-dom'
import Component from '../../src'
import '../../styles/style.css'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-dripr-viewer Demo</h1>
      <Component fileId="EJar82-zW"/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
