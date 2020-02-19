function score( dice ) {
  // set score and counters for values to 0 
  var score = 0, ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0;

  // loop through dice and count the numbers rolled
  for (var i = 0; i < dice.length; i++) {
    if (dice[i] == 1) {
      ones++;
    } else if (dice[i] == 2) {
      twos++;
    } else if (dice[i] == 3) {
      threes++;
    } else if (dice[i] == 4) {
      fours++;
    } else if (dice[i] == 5) {
      fives++;
    } else {
      sixes++;
    }
  }
  
  // calculates score for each roll possibility and adds to score
  score += (Math.floor(ones / 3) * 1000);
  score += (Math.floor(ones % 3) * 100);
  
  score += (Math.floor(twos / 3) * 200);
  
  score += (Math.floor(threes / 3) * 300);
  
  score += (Math.floor(fours / 3) * 400);
  
  score += (Math.floor(fives / 3) * 500);
  score += (Math.floor(fives % 3) * 50);
  
  score += (Math.floor(sixes / 3) * 600);
  
  return score;
}
