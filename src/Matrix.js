import React from 'react';
import Cell from './Cell.js';


export default class Matrix extends React.Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
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

Matrix.defaultProps = {
  values: (() => {
    const defaultArray = i => Array(10).fill(i);
    return (defaultArray(defaultArray('#F00')))
  })()
}
