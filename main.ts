let juan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 1 . . . . . 1 . . . . . 
. . . . 1 . 6 . 6 . 1 . . . . . 
. . . . 1 . . . . . 1 . . . . . 
. . . . 1 4 4 4 4 4 1 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . 1 . . . . . 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 . . . . . 4 4 . . . . 
. . . 4 . . 8 . . 8 . 4 . . . . 
. . 4 4 . . . . . . . 4 4 . . . 
. . 4 4 . c . . . . c . 4 . . . 
. . . 4 4 . c c c c . 4 4 . . . 
. . . . 4 4 4 . . . 4 4 . . . . 
. . . . . . 4 7 4 4 4 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(13)
// Stairs are going down
//
// Goal 2: make second character. make it go in
// opposite direction of first staircase
//
// Goal 1: is to make stairs to also go up
for (let index = 0; index < 6; index++) {
    pause(100)
    juan.y += 4
    pause(100)
    juan.y += 4
}
