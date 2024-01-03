const canvas = document.getElementById('canvas1')
// Targets the actual canvas 2d object. Contains useful canvas methods.
const ctx = canvas.getContext('2d')

// Sets 2 variables at once, CANVAS_WIDTH and the actual width of the canvas.
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

// Get image from src 
const playerImage = new Image()
playerImage.src = 'shadow_dog.png'
// Single sprite frame dimensions
const spriteWidth = 575
const spriteHeight = 523
// Which sprite position. X will always = 0, y will change sprite position.
let frameX = 0
let frameY = 0

let gameFrame = 0
const staggerFrames = 5

function animate() {
    // clearRect erases pixels in rect area by setting them to transparent black. Args are (x, y, width, height). fillRect does the opposite, but same args.
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // We have to increase gameFrame 5x before we can move to next frame. Position variable cycles between 0 and 6
    let position = Math.floor(gameFrame/staggerFrames) % 6

    frameX = spriteWidth * position
    // drawImage takes 3 args + optional 6 more. First is image, then x and y coordinates of image we want to cut out, then desired width & height then destination x and y coordinates. ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    // staggerFrames = 5, meaning this statement will be true every 5 frames. 
    // if(gameFrame % staggerFrames === 0) {
    //     // Switches image to next sprite horizontally
    //     if(frameX < 6) frameX++
    //     else frameX=0
    // }

    gameFrame++

    requestAnimationFrame(animate)
}

animate();
