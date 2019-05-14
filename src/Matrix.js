import React, { Component } from 'react';
import Cell from './Cell.js'

const defaultArray = [
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"],
  ['#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00", '#F00', "#F00"]
]

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    console.log(this.props.values);
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: defaultArray
};
