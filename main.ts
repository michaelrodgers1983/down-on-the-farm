function Menu () {
    Lyle_Level = sprites.create(img`
        ffff.....ffff..ffff.ffff......ffffffffff
        f11f.....f111ff111f.f11f......f11111111f
        f11f......f111111f..f11f......f11111111f
        f11f.......f1111f...f11f......f11fffffff
        f11f........f11f....f11f......f11f......
        f11f........f11f....f11f......f11f......
        f11f........f11f....f11f......f11fffff..
        f11f........f11f....f11f......f111111f..
        f11f........f11f....f11f......f111111f..
        f11f........f11f....f11f......f11fffff..
        f11f........f11f....f11f......f11f......
        f11f........f11f....f11f......f11f......
        f11ffffff...f11f....f11ffffff.f11fffffff
        f1111111f...f11f....f1111111f.f11111111f
        f1111111f...f11f....f1111111f.f11111111f
        fffffffff...ffff....fffffffff.ffffffffff
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
