import styles from "../style/MainGameBoard.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { BoardContext } from "../context/BoardContext";
import { PlayerContext } from "../context/PlayerContext";
import { DialogContext } from "../context/DialogContext";
import { PlayerMarker } from "../shared/tic-tac-toe";
import GameSquare from "../components/GameSquare";
import GameHeader from "../components/GameHeader";
import ScoreBoard from "../components/ScoreBoard";
import GameOverDialog from "../components/GameOverDialog";
import Button from "../components/Button";
import GameContainer from "../components/GameContainer";
import WinningMessage from "../components/WinningMessage";

export default function MainGameBoard() {
  const { vsCpu, addWin, addTie, restartGame, setVsCpu } =
    useContext(GameContext);

  const { getSquare, setSquare, board, checkForWinner, getCpuMove } =
    useContext(BoardContext);

  const { playerMarkers, nextPlayer, currentPlayer, resetPlayers } =
    useContext(PlayerContext);

  const { toggleGameDialog, gameDialogVisible } = useContext(DialogContext);

  const [winningSquares, setWinningSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentWinner, setCurrentWinner] = useState(PlayerMarker.Empty);
  const [isTie, setIsTie] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (vsCpu) {
      if (currentPlayer === playerMarkers.playerTwo) {
        const cpuSquare = getCpuMove();
        if (cpuSquare !== undefined) {
          setTimeout(() => {
            squareClickHandler(cpuSquare);
          }, 300);
        }
      }
    }
  }, [currentPlayer, vsCpu, gameOver]);

  const squareClickHandler = (squareNum) => {
    if (gameOver) {
      return;
    }

    if (getSquare(squareNum) === PlayerMarker.Empty) {
      setSquare(squareNum, currentPlayer);
      let winner = checkForWinner();

      if (winner.win) {
        addWin({ player: winner.player, points: 1 });
        setCurrentWinner(winner.player);
        setWinningSquares([...winner.squares]);
        setGameOver(true);
        toggleGameDialog();
        return;
      }

      if (winner.tie === true) {
        addTie();
        setIsTie(true);
        setGameOver(true);
        setWinningSquares([]);
        toggleGameDialog();
        return;
      }
      nextPlayer();
    }
  };

  const handleQuitClick = () => {
    setGameOver(false);
    restartGame(true);
    setIsTie(false);
    resetPlayers();
    setVsCpu(false);
    navigate("/");
  };

  const handleNextRoundClick = () => {
    setGameOver(false);
    setIsTie(false);
    resetPlayers();
    restartGame();
  };

  return (
    <>
      <GameContainer>
        <GameHeader currentPlayer={currentPlayer} />
        <div className={styles.gameBoardContainer}>
          {board.map((square, num) => {
            let winningSquare = false;
            if (gameOver && winningSquares.includes(num)) {
              winningSquare = true;
            }
            return (
              <GameSquare
                key={num}
                squareNum={num}
                winningSquare={winningSquare}
                marker={square.player}
                onClick={squareClickHandler}
              />
            );
          })}
        </div>
        <ScoreBoard />
      </GameContainer>
      {gameDialogVisible && (
        <GameOverDialog>
          <WinningMessage
            winningPlayer={currentWinner}
            players={playerMarkers}
            tie={isTie}
          />
          <div className={styles.dialogButtonContainer}>
            <Button type="secondary" color="gray" onClick={handleQuitClick}>
              QUIT
            </Button>
            <Button
              type="secondary"
              color="yellow"
              onClick={handleNextRoundClick}
            >
              NEXT ROUND
            </Button>
          </div>
        </GameOverDialog>
      )}
    </>
  );
}
