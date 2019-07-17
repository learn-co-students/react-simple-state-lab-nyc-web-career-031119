//the cell is the child of the matrix, it is inheriting from the Matrix
import React, { Component } from 'react';
import Matrix from './Matrix.js'

class Cell extends Component {

  constructor(props) {
   // console.log(props)
   super(props)
   this.state = {
     color: props.value
   }
 }

  render() {
   return (
     <div className="cell"
       style={{backgroundColor: this.state.color}}
       onClick={ () => {
         // console.log("I WAS CLICKED!")
         this.setState({color: '#333'})
       }
     }>
     </div>
   )
 }

}







export default Cell;
