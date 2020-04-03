const finalPosition = function(moves){
  let x = 0;
  let y = 0;
  let position = [];
  for(let move of moves){
    switch (move){
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'west':
        x--;
        break;
      case 'east':
        x++;
        break;
    }
  }
  position.push(x);
  position.push(y);
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));