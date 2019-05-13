import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

//A helper function that generates an inputted n x n matrix with a default value of red
const generateDefaultMatrix = (number) => {
  let matrix = [];
  for (let i = 0; i < number; i++) {
    let row = [];
    for (let j = 0; j < number; j++) {
      row.push("#F00")
    }
    matrix.push(row);
  }
  return matrix;
}

// default props for matrix!
Matrix.defaultProps = {
  values: generateDefaultMatrix(10)
}
