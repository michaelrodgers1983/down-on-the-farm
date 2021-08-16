namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const Menu = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Menu, function (sprite, otherSprite) {
    if (otherSprite == Lyle_Level) {
        otherSprite.say("Lyle's Game")
    }
})
function Menu () {
    Lyle_Level = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        d d d d d d 8 8 8 8 . . . . . . 
        d d d d d d 8 9 9 9 8 . . . . . 
        d d d d d d 8 9 9 9 9 8 . . . . 
        d d d d d d 8 9 9 9 9 8 . . . . 
        d d d d d d 8 8 8 8 8 8 8 8 8 5 
        b b b b b b 8 8 8 8 8 8 8 8 8 8 
        b b b f f b 8 8 8 8 8 f f 8 8 8 
        b b f d d f 8 8 8 8 f d d f 8 8 
        . b f d d f 8 8 8 8 f d d f 8 8 
        . . . f f . . . . . . f f . . . 
        `, SpriteKind.Menu)
    Lyle_Level.setPosition(38, 23)
    Cursor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 1 f . . . . . 
        . . . . . . f 1 1 1 1 f . . . . 
        . . . . . . f 1 1 1 1 1 f . . . 
        . . . . . . f 1 1 1 1 1 1 f . . 
        . . . . . . f 1 1 1 1 1 1 f . . 
        . . . . . . f f f 1 1 f f . . . 
        . . . . . . . . . f 1 f . . . . 
        . . . . . . . . . f 1 1 f . . . 
        . . . . . . . . . . f 1 f . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cursor)
    controller.moveSprite(Cursor)
    Xavier_Level = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scene.setBackgroundColor(9)
}
let Xavier_Level: Sprite = null
let Cursor: Sprite = null
let Lyle_Level: Sprite = null
Menu()
