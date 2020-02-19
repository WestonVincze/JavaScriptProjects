/* assumes input is always a 9x9 board with integers from 0 to 9 */
function validSolution(board){
  // check if columns contain any duplicate values and return false if so
  for (let i = 0; i < board.length; i++) {
    for (let k = 1; k < board[i].length; k++) {
      if (board[0][i] == board[k][i]) {
        return false;
      }
    }
  }
  
  // fill out sections with '0'
  let sections = Array(9).fill(0);
  // counter for 3x3 'section' of the board
  let section = 0;
  
  // populate sections array with values from respective section
  for (let i = 0; i < board.length; i++) {
    if (i == 3 || i == 6) {
      section++;
    }
    for (let k = 0; k < board[i].length; k++) {
      // first set into section 0
      if (k < 3) {
        sections[0+section] += board[i][k];
      } else if (k < 6) {
        // second set into section 3
        sections[3+section] += board[i][k];
      } else {
        // third set into section 6
        sections[6+section] += board[i][k];
      }
    }
  }
  
  // summate each section and return false if sum is not 45
  if (sections.some(s => s != 45)) return false;
  
  // check rows by sorting the board and ensuring 1 through 9 exist
  // will return false if any row fails the check
  let sortedBoard = board.map(row => row.sort());
  return !sortedBoard.some(row => row.some((n, i) => n != i + 1));
}
