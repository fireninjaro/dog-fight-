controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . d e d . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    projectile2.follow(mySprite2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 . . 5 . . 5 . . . . . . . . . 
        5 5 . 5 5 . 5 5 . . . . . . . . 
        5 . . 5 . . 5 . . . . . . . . . 
        . 5 . . 5 . . . 5 . . . . . . . 
        . 5 5 . 5 5 . . 5 5 . . . . . . 
        . 5 . . 5 . . . 5 . . . . . . . 
        5 . . 5 . . 5 . . . . . . . . . 
        5 5 . 5 5 . 5 5 . . . . . . . . 
        5 . . 5 . . 5 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c . . . 
        . . . . . . . . . . . c c . . c 
        . . . . . . . . . c c 8 c . c c 
        . . . . . . . c c c c c c c c c 
        . . . c c c c 8 f c c c c c c f 
        . . c c c c 8 f 8 8 c c c c c 2 
        . . . c c c c 8 f c c c c c c f 
        . . . . . . . c c c c c c c c c 
        . . . . . . . . . c c 8 c . c c 
        . . . . . . . . . . . c c . . c 
        . . . . . . . . . . . . c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c . . . . . . . . . . . . 
        c . . c c . . . . . . . . . . . 
        c c . c 8 c c . . . . . . . . . 
        c c c c c c c c c . . . . . . . 
        f c c c c c c f 8 c c c c . . . 
        2 c c c c c 8 8 f 8 c c c c . . 
        f c c c c c c f 8 c c c c . . . 
        c c c c c c c c c . . . . . . . 
        c c . c 8 c c . . . . . . . . . 
        c . . c c . . . . . . . . . . . 
        . . . c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setImage(img`
        . . . . c c c f 2 f c c c . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . c c c c c . . . . . 
        . . . c c c c c c c c c c c . . 
        . . . . c 8 c c c c c 8 c . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . c c c 8 c c c . . . . 
        . . . . . . c f 8 f c . . . . . 
        . . . . . . c 8 f 8 c . . . . . 
        . . . . . . . c 8 c . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 500)
})
let projectile3: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . . . c 8 c . . . . . . . 
    . . . . . c 8 f 8 c . . . . . . 
    . . . . . c f 8 f c . . . . . . 
    . . . . c c c 8 c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . c 8 c c c c c 8 c . . . . 
    . . c c c c c c c c c c c . . . 
    . . . . . c c c c c . . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . c c c f . f c c c . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 8 2 . . . . . . . 
    . . . . . 2 8 f 8 2 . . . . . . 
    . . . . . 2 f 8 f 2 . . . . . . 
    . . . . 2 2 2 8 2 2 2 . . . . . 
    . . . . f 2 2 2 2 2 f . . . . . 
    . . . f 2 f 2 2 2 f 2 f . . . . 
    . . 2 2 f 2 2 2 2 2 f 2 2 . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 f . f 2 2 2 . . . . 
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 16))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 16))
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite, 85)
game.onUpdateInterval(5000, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . d e d . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 0)
    projectile3.follow(mySprite)
    info.changeScoreBy(1)
})
