import { WinnerConditions } from "../constants"

// check if there is a winner
export const checkWin = (boardToCheck) => {
    for (const condition of WinnerConditions) {
        const [a,b,c] = condition
        if (boardToCheck[a] 
        && boardToCheck[a] === boardToCheck[b] 
        && boardToCheck[a] === boardToCheck[c])  return boardToCheck[a]
    }
    return null
}