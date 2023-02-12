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
  const [cells, setCells] = useState(Array(9).fill(''))
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)
  const [ties, setTies] = useState(0)

  const handleClick = (num) => {
    let squares = [...cells]

    if (playerTurn === 'x') {
      squares[num] = 'x'
      setPlayerTurn('o')
    } else {
      squares[num] = 'o'
      setPlayerTurn('o')
    }
    setCells(squares)
    console.log(squares)
  }

  const Cell = ({ num }) => {

    return (
      <td onClick={handleClick(num)}>
        {cells[num]}
      </td>
    )
  }

  const Board = () => {
    return (
      <Table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
          <tr>
            <td className="score">
              <span>X (you)</span>
              <h3>{xWins}</h3>
            </td>
            <td className="score ties">
              <span>Ties</span>
              <h3>{ties}</h3>
            </td>
            <td className="score oScore">
              <span>O (CPU)</span>
              <h3>{oWins}</h3>
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
