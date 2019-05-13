import React, { Component } from 'react';
import Cell from './Cell.js'
import { pattern2 } from './data.js'

class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => {
      return <Cell value={val} />
    })
   );
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  );
  
  render() {
    return <div id="matrix">
      {this.genMatrix()}
    </div>
  }
}

Matrix.defaultProps = {
  values: pattern2
};

export default Matrix
