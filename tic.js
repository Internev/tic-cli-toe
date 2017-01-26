var inquirer = require('inquirer')
var xTurn = true
var moves = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var availMoves = {1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true}

init()

function init(){
  drawBoard()
  playMove()
}

function drawBoard(){
  console.log('\n************************************\n  A thrilling game of tic-tac-toe!\n************************************\n')

  console.log(`   ${moves[0]}  | ${moves[1]}  | ${moves[2]}  `)
  console.log('  -------------')
  console.log(`   ${moves[3]}  | ${moves[4]}  | ${moves[5]}  `)
  console.log('  -------------')
  console.log(`   ${moves[6]}  | ${moves[7]}  | ${moves[8]}  \n`)
  return
}

function playMove(){
  var player = xTurn ? 'X' : 'O'
  var question = [{
    type: 'input',
    name: 'move',
    message: 'Which square would you like to play, ' + player + '?',
    validate: function(value){
      if (availMoves[value]) {
        return true
      }
      return 'Please choose a valid square, no cheating!'
    }
  }]
  var prompt = inquirer.createPromptModule()
  prompt(question)
    .then(answer=>{
      moves[answer.move -1] = player
      availMoves[answer.move] = false
      xTurn = !xTurn
      drawBoard()
      checkWin(player)
    })
}

function checkWin(p){
  if (!/[1-9]/.test(moves.join(''))){
    console.log('You have played to a draw')
    console.log('How terribly boring\n')
    process.exit(0)
  }
  var check = moves.slice().filter(i=>i===p)
  if (check.length < 3){
    return playMove()
  } else {
    for (var i=0; i<moves.length; i++){
      if (moves[i] === p){
        if (line(i, p)){
          console.log('WE HAVE A WINNER!')
          console.log('ALL HAIL ' + p + '\n')
          process.exit(0)
        }
      }
    }
    return playMove()
  }
}

function line(i, p){
  //horizontal
  if (i === 0 || i%3 === 0){
    if (moves[i+1] === p && moves[i+2] === p){
      return true
    }
  }
  //vertical
  if (i === 0 || i === 1 || i === 2){
    if (moves[i+3] === p && moves[i+6] === p){
      return true
    }
  }
  //right diagonal
  if (i === 0) {
    if (moves[4] === p && moves[8] === p){
      return true
    }
  }
  if (i === 2){
    if (moves[4] === p && moves[6] === p){
      return true
    }
  }
  return false
}
