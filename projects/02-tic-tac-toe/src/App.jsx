import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

// Square component
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }

  return(
    <div className={className} onClick={ handleClick }>
      {children}
    </div>
  );
}

function App() {
  // board 
  const [board, setBoard] = useState(Array(9).fill(null))
  
  // turn
  const [turn, setTurn] = useState(TURNS.X)

  // win condition
  const winCondition = [
    [0,1,2], [3,4,5], [6,7,8], // horizontal
    [0,3,6], [1,4,7], [2,5,8], // vertical
    [0,4,8], [2,4,6] // diagonal
  ]

  // winner
  const [winner, setWinner] = useState(null) // null == no winner yet and false == draw

  const checkWin = (boardToCheck) => {
    for (const condition of winCondition) {
      const [a,b,c] = condition
      if (boardToCheck[a] 
        && boardToCheck[a] === boardToCheck[b] 
        && boardToCheck[a] === boardToCheck[c])  return boardToCheck[a]
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
      setWinner(newWinner)
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
