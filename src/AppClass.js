import React, { Component } from 'react'
import BoxClass from './components/BoxClass';
import './App.css';

const imgObj = {
  rock: {
    name: 'rock',
    url: 'https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png',
  },
  scissors: {
    name: 'scissors',
    url: 'http://www.pngmart.com/files/1/Scissors-PNG-Pic.png',
  },
  paper: {
    name: 'paper',
    url: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  },
}

export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      comUrl: '',
      result: ''
    }
  }

  myResult;

  playResult = (user, computer) => {
    if(user === 'rock') {
      if(computer === 'scissors') return 'Winner';
      else if(computer === 'paper') return 'Loser';
      else return 'Tie';
    } else if(user === 'scissors') {
      if(computer === 'paper') return 'Winner';
      else if(computer === 'rock') return 'Loser';
      else return 'Tie';
    } else if(user === 'paper') {
      if(computer === 'rock') return 'Winner';
      else if(computer === 'scissors') return 'Loser';
      else return 'Tie';
    }
  };

  handleClick = (play) => {
    const imgArr = Object.keys(imgObj);
    const randomNumber = Math.floor(Math.random() * imgArr.length);
    
    this.setState({
      url: imgObj[play].url,
      comUrl: imgObj[imgArr[randomNumber]].url,
      result: this.playResult(play, imgArr[randomNumber])
    });

    /* setComUrl(imgObj[imgArr[randomNumber]].url);
    setUrl(imgObj[play].url);
    setResult(playResult(play, imgArr[randomNumber])); */
  };

  render() {
    if(this.state.result === 'Winner') this.myResult = 'Win';
    else if(this.state.result === 'Loser') this.myResult = 'Lose';
    else this.myResult = 'Tie';
    
    return (
      <div className='container'>
        <div className='box_wrap'>
          <BoxClass title='You' url={this.state.url} result={this.state.result} />
          <BoxClass title='Computer' url={this.state.comUrl} result={this.state.result} />
        </div>
        <div className='button_wrap'>
          <button onClick={() => {this.handleClick('scissors')}}>가위</button>
          <button onClick={() => {this.handleClick('rock')}}>바위</button>
          <button onClick={() => {this.handleClick('paper')}}>보</button>
        </div>
        <h1>{this.myResult}</h1>
      </div>
    )
  }
}