var inquirer = require('inquirer')

init()

var winState = false
var xTurn = true

function init(){
  drawBoard()
  playMove()
}

function drawBoard(moves){
  if (moves === undefined || moves.length === 0){
    console.log('A thrilling game of tic-tac-toe commences!')
    console.log(' 1 | 2 | 3 ')
    console.log('-----------')
    console.log(' 4 | 5 | 6 ')
    console.log('-----------')
    console.log(' 7 | 8 | 9 ')
    return
  }
}

function playMove(){
  var player = xTurn ? 'X' : 'O'
  var question = [{
    type: 'input',
    name: 'move',
    message: 'Which square would you like to play, ' + player + '?'
  }]
  var prompt = inquirer.createPromptModule()
  prompt(question)
    .then(answer=>{
      console.log(answer)
    })
}
