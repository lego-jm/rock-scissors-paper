import { useState } from 'react';
import './App.css';
import Box from './components/Box';

/**
 * paper
 * https://www.collinsdictionary.com/images/full/paper_111691001.jpg
 * 
 * rock
 * https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png
 * 
 * scissors
 * http://www.pngmart.com/files/1/Scissors-PNG-Pic.png
 */

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

function App() {
  const [url, setUrl] = useState('');
  const [comUrl, setComUrl] = useState('');
  const [result, setResult] = useState('');
  let myResult;

  const handleClick = (play) => {
    const imgArr = Object.keys(imgObj);
    const randomNumber = Math.floor(Math.random() * imgArr.length);

    setComUrl(imgObj[imgArr[randomNumber]].url);
    setUrl(imgObj[play].url);
    setResult(playResult(play, imgArr[randomNumber]));
    resultTitle();
  };

  const playResult = (user, computer) => {
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

  const resultTitle = () => {
    if(result === 'Winner') myResult = 'Win';
    else if(result === 'Loser') myResult = 'Lose';
    else myResult = 'Tie';
  }

  return (
    <div className='container'>
      <div className='box_wrap'>
        <Box title='You' url={url} result={result} />
        <Box title='Computer' url={comUrl} result={result} />
      </div>
      <div className='button_wrap'>
        <button onClick={() => {handleClick('scissors')}}>가위</button>
        <button onClick={() => {handleClick('rock')}}>바위</button>
        <button onClick={() => {handleClick('paper')}}>보</button>
      </div>
      <h1>{myResult}</h1>
    </div>
  );
}

export default App;
