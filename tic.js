var inquirer = require('inquirer')
var winState = false
var xTurn = true
var moves = [1, 2, 3, 4, 5, 6, 7, 8, 9]

init()

function init(){
  drawBoard()
  playMove()
}

function drawBoard(){
  if (moves.indexOf(/[XO]/) === -1){
    console.log('\n******************************************\nA thrilling game of tic-tac-toe commences!\n******************************************\n')
  } else {
    console.log('\nThe next exciting move in this electrifying game...\n')
  }
  console.log(`   ${moves[0]}  | ${moves[1]}  | ${moves[2]}  `)
  console.log('  -------------')
  console.log(`   ${moves[3]}  | ${moves[4]}  | ${moves[5]}  `)
  console.log('  -------------')
  console.log(`   ${moves[6]}  | ${moves[7]}  | ${moves[8]}  \n`)
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
      console.log([player, answer.move])
      moves.push([player, answer.move])
      xTurn = !xTurn
    })
}
