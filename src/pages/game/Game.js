import React from "react";
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

const Game = () => {

  const Board = () => {
    return (
      <Table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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
          <img src={grayO} alt='grayX' />
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
