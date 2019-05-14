import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.value)
        this.state = {color: this.props.value}
    }

    toGray = () => {
        this.setState(
            {color: "#333"}
        ) 
    }
      

    render() {
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.toGray}></div>
    }
  

}