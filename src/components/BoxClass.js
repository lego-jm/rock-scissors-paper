import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    let result;

    if(this.props.title === 'Computer' 
      && this.props.result !== 'Tie'
      && this.props.result !== '') {
      result = this.props.result === 'Winner' ? 'Loser' : 'Winner';
    } else {
      result = this.props.result;
    }
    return (
      <div className={`box ${result.toLowerCase()}`}>
        <h1>{this.props.title}</h1>
        <div className='img_wrap'>
          <img src={this.props.url} alt="" />
        </div>
        <h3>{result}</h3>
      </div>
    )
  }
}