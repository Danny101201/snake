import { getInputDirection } from './input.js'
export const snake_speed = 4 //limit 16
const snakeBody = [
    { x: 11, y: 11 }
]
let newSegments = 0
console.log(snakeBody.length)
export function update() {
    addSegments(newSegments)
    const inputDirection = getInputDirection()

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}
export function draw(gameBoard) {
    snakeBody.forEach(element => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = element.y
        snakeElement.style.gridColumnStart = element.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
export function expandSnake(amout) {
    newSegments += amout
}
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((element, index) => {
        if (ignoreHead && index === 0) return false
        return equalPosition(element, position)
    })
}
export function getSnakeHead() {
    return snakeBody[0]
}
export function snakeInteraction() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}
function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}

