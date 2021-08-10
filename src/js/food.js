import {onSnake,expandSnake} from './snake'
import { randomGridPosition}from './grid'
let food = { x: 10, y: 1 }
const EXPANSION_RATE = 5
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = gerRandomFoodPosition()
    }
}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}
function gerRandomFoodPosition() {
    let newPosition
    while (newPosition == null || onSnake(newPosition)){
        newPosition = randomGridPosition()
    }
    return newPosition
}

