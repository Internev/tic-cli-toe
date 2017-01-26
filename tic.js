var inquirer = require('inquirer')
var winState = false
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
  var check = moves.slice().filter(i=>i===p)
  if (check.length < 3){
    playMove()
  } else {
    console.log('Potential WINNAR')
    setTimeout(()=>{process.exit(0)}, 5000)
  }
}
