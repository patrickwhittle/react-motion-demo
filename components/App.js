import React from 'react'
import { Motion, spring } from 'react-motion'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.setVisible = this.setVisible.bind(this)
  }

  setVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  getVisibleStyle() {
    return {
      opacity: spring(1),
      maxHeight: spring(500)
    }
  }

  getHiddenStyle() {
    return {
      opacity: spring(0),
      maxHeight: spring(0)
    }
  }

  render() {
    return (
      <div>
        <button style={{marginBottom: 10}} onClick={this.setVisible}>click me</button>
        <Motion style={this.state.visible ? this.getVisibleStyle() : this.getHiddenStyle()}>
          {({maxHeight, opacity}) => {
            const style = {
              width: 500,
              height: 500,
              background: 'red',
              opacity,
              maxHeight,
            }
            return <div style={style} />
          }}
        </Motion>
      </div>
    )
  }

}

export default App

