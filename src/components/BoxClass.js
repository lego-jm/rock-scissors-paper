import React, { Component } from 'react'

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = '';
  }

  getResult = () => {
    if(this.props.title === 'Computer' && this.props.result !== 'Tie' && this.props.result !== '') {
      this.result = this.props.result === 'Winner' ? 'Loser' : 'Winner';
    } else {
      this.result = this.props.result;
    }
  };

  render() {
    this.getResult();

    return (
      <div className={`box ${this.result.toLowerCase()}`}>
        <h1>{this.props.title}</h1>
        <div className='img_wrap'>
          <img src={this.props.url} alt="" />
        </div>
        <h3>{this.result}</h3>
      </div>
    )
  }
}
