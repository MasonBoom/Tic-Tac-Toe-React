import React, { useState } from "react";
import {
  GameContainer,
  TopRow,
  PlayerTurn,
  RestartButton,
  Table,
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
import hoverX from '../../assets/hoverX.svg';
import hoverO from '../../assets/hoverO.svg';

const Game = () => {
  const [playerTurn, setPlayerTurn] = useState('x')

  const handleClick = () => {
    setPlayerTurn(playerTurn === 'x' ? 'o' : 'x')
  }

  const Cell = () => {
    return (
      <td onClick={handleClick}>
        {playerTurn === 'x' ?
          <img src={hoverX} alt="x icon hover" /> :
          <img src={hoverO} alt="o icon hover" />
        }
      </td>
    )
  }

  const Board = () => {
    return (
      <Table>
        <tbody>
          {
            [...Array(3)].map((_, i) => {
              return (
                <tr>
                  <Cell />
                  <Cell />
                  <Cell />
                </tr>
              )
            })
          }
          <tr>
            <td className="score">
              <span>X (you)</span>
              <h3>15</h3>
            </td>
            <td className="score ties">
              <span>Ties</span>
              <h3>15</h3>
            </td>
            <td className="score oScore">
              <span>O (CPU)</span>
              <h3>10</h3>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }

  return (
    <GameContainer>
      <TopRow>
        <IconRow className='gamePage'>
          <ColoredIcon className="gamePage" src={x} alt='x' />
          <ColoredIcon src={o} alt='o' />
        </IconRow>
        <PlayerTurn>
          {playerTurn === 'x' ? 
          <img src={grayX} alt="x icon" /> : 
          <img src={grayO} alt="o icon" />
          }
          <span>Turn</span>
        </PlayerTurn>
        <RestartButton>
          <img src={restart} alt="restart icon" />
        </RestartButton>
      </TopRow>
      <Board />
    </GameContainer>
  );
}

export default Game;
