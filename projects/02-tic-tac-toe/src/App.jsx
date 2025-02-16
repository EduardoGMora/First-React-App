import { useState } from "react"
import confetti from 'canvas-confetti'

import { Square } from './components/Square'  // import Square component
import { TURNS } from './constants' // import TURNS
import { checkWin } from './logic/board' // import checkWin function

function App() {
  // board 
  const [board, setBoard] = useState(Array(9).fill(null))
  
  // turn
  const [turn, setTurn] = useState(TURNS.X)

  // winner
  const [winner, setWinner] = useState(null) // null == no winner yet and false == draw

  // reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // check if it's a draw
  const isDraw = (Board) => {
    return Board.every(square => square !== null)
  }

  const updateBoard = (index) => {
    // check if the square is already filled
    if (board[index] !== null || winner) return
  
    // change turn
    setTurn( turn === TURNS.X ? TURNS.O : TURNS.X )

    // uodate board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // check if there's a winner
    const newWinner = checkWin(newBoard)

    // set winner
    if (newWinner) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
      })
      setWinner(newWinner)
    } else if (isDraw(newBoard)) {
      setWinner(false)
    }
  }
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_,index)=>{
            return(
              <Square key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
 
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <button onClick={resetGame}>Restart</button>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {winner === false 
                  ? 'Draw' 
                  : `Winner:`}
              </h2>

              <header className="win">
                {
                  winner && <Square>{winner}</Square>
                }
              </header>

              <footer>
                <button onClick={resetGame}>Restart</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App 
