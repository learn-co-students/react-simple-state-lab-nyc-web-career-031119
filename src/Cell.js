import React, { Component } from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.value
    };
  }

  changeColor = e => {
    this.setState({
      color: "#333"
    });
  };

  // state = {
  //     color: this.props.value
  // }
  render() {
    // console.log(this)
    // console.log(this.state.color)
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={() => {
          this.changeColor();
        }}
      />
    );
  }
}
// Cell.defaultProps = {
  
// };
export default Cell;
