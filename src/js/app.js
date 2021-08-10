import { update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeInteraction} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid} from './grid'
const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0
let gameOver = false
function main(currentTime){
    if (gameOver){
        if(confirm('You lose. Press ok to restart.')){
           location.reload()
        }
        return
    }
    
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000 //0.016
    if (secondSinceLastRender < 1 / snake_speed) return
    lastRenderTime = currentTime

    //
    update()
    draw()
    // console.log('render')

}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}
function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeInteraction()
}
