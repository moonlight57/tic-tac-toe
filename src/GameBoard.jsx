import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((initGameBoard) => {
      const newGameBoard = [
        ...initGameBoard.map((innerArray) => {
          [...innerArray];
        }),
      ];
      newGameBoard[rowIndex][colIndex] = "X";
      return newGameBoard;
    });
  }

  return (
    <>
      <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => {
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                <li key={colIndex}>
                  <button
                    onClick={() => handleSelectSquare({ rowIndex, colIndex })}
                  >
                    {playerSymbol}
                  </button>
                </li>;
              })}
            </ol>
          </li>;
        })}
      </ol>
    </>
  );
}
