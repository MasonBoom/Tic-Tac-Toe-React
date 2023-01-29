import React from "react";
import {
  GameContainer,
  TopRow,
  PlayerTurn,
  RestartButton,
} from './game.styles';
import {
  IconRow,
  ColoredIcon
} from '../mainPage/mainpage.styles';
import x from '../../assets/x.svg';
import o from '../../assets/o.svg';
import grayX from '../../assets/grayX.svg';
import grayO from '../../assets/grayO.svg';
import restart from '../../assets/restart.svg';

const Game = () => {
  return (
    <GameContainer>
      <TopRow>
        <IconRow className='gamePage'>
          <ColoredIcon className="gamePage" src={x} alt='x' />
          <ColoredIcon src={o} alt='o' />
        </IconRow>
        <PlayerTurn>
          <img src={grayO} alt='grayX' />
          <span>Turn</span>
        </PlayerTurn>
        <RestartButton>
          <img src={restart} alt="restart icon" />
        </RestartButton>
      </TopRow>
    </GameContainer>
  );
}

export default Game;