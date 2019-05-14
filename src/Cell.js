import React, { Component } from 'react';

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {color: props.value}
  }

cellHandler = () => {
  this.setState({
      color: "#333"
    })
}

  render(){
    console.log("cell", this.props);
    return <div className="cell" value={this.props.value} style={{backgroundColor: this.state.color}} onClick={this.cellHandler}></div>
  }
}
export default Cell;
