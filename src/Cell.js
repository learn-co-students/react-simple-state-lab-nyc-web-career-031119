import React, { Component } from 'react';

class Cell extends Component {
  state = {color: this.props.value}

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render () {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
    )
  }
}
Cell.defaultProps = {
  value: '#fe7843'
}

export default Cell
