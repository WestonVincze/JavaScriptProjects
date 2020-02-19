/*
 * Accepts a 'board' of three arrays each with a size of 3
 * returns:
 *   -1 if the game is not done
 *   1 if 'X' won
 *   2 if 'O' won
 *   0 if draw
 */
function isSolved(board) {
  let zeroes = false;
  
  // check if horizontal win occurs and return winner if so
  for (i in board) {
    if (typeof board[i] == 'object') {
      if (board[i].every(a => a === 1) || board[i].every(a => a === 2)) 
        return board[i][0];
      if (!zeroes)
        if (board[i].some(a => a === 0)) zeroes = true;
    }
  }
  
  // create object to check wins for 'columns' and 'diagonals' 
  let wins = {
    c1: [board[0][0], board[1][0], board[2][0]],
    c2: [board[0][1], board[1][1], board[2][1]],
    c3: [board[0][2], board[1][2], board[2][2]],
    d1: [board[0][0], board[1][1], board[2][2]], 
    d2: [board[0][2], board[1][1], board[2][0]]
  }
  
  // loop through win conditions and return winner if found
  for (w in wins) {
    if (wins[w].every(a => a === 1) || wins[w].every(a => a === 2)) {
      return wins[w][0];
    }
  }
  
  // if there are any zeroes, not finished (-1) otherwise cats game (0)
  return zeroes ? -1 : 0;
}
