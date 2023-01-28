import React from "react";
import {
  GameContainer,
  TopRow,
} from './game.styles';
import {
  IconRow,
  ColoredIcon
} from '../mainPage/mainpage.styles';
import x from '../../assets/x.svg';
import o from '../../assets/o.svg';

const Game = () => {
  return (
    <GameContainer>
      <TopRow>
        <IconRow className='gamePage'>
          <ColoredIcon src={x} alt='x' />
          <ColoredIcon src={o} alt='o' />
        </IconRow>
      </TopRow>
    </GameContainer>
  );
}

export default Game;