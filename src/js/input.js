let inputDirection = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e)=>{
    if (e.key === 'F5') return
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)){
        alert('請使用方向鍵')
    }
    switch(e.key) {
        case 'ArrowUp':
            if (lastDirection.y !== 0)break 
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})
export function getInputDirection(){
    lastDirection = inputDirection
    return inputDirection
}