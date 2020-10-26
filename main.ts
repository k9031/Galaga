  let ship = sprites.create(img`
      . . . . . . . c d . . . . . . .
      . . . . . . . c d . . . . . . .
      . . . . . . . c d . . . . . . .
      . . . . . . . c b . . . . . . .
      . . . . . . . f f . . . . . . .
      . . . . . . . c 6 . . . . . . .
      . . . . . . . f f . . . . . . .
      . . . . . . . 8 6 . . . . . . .
      . . . . . . 8 8 9 8 . . . . . .
      . . . . . . 8 6 9 8 . . . . . .
      . . . . . c c c 8 8 8 . . . . .
      . . . . 8 8 6 6 6 9 8 8 . . . .
      . . 8 f f f c c e e f f 8 8 . .
      . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 .
      8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8
      8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8
  `, SpriteKind.Player)
  ship.setFlag(SpriteFlag.StayInScreen, true)
  info.setLife(100)
  controller.moveSprite(ship, 100, 100)

  controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
   sprites.createProjectileFromSprite(img`
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . 5 . . . . . . . .
       . . . . . . . 5 . . . . . . . .
       . . . . . . . 5 . . . . . . . .
       . . . . . . . 5 . . . . . . . .
       . . . . . . . 5 . . . . . . . .
       . . . . . . . 5 . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
   `, ship, 0, -400)
})
game.onUpdateInterval(500, function() {
    let enemy = sprites.create(img`
        . . . . . . c c c . . . . . . .
        . . . . . a a a c c c . . . . .
        . . . c a c f a a a a c . . . .
        . . c a c f f f a f f a c . . .
        . c c a c c f a a c f f a c . .
        . a b a a c 6 a a c c f a c c c
        . a b b b 6 a b b a a c a f f c
        . . a b b a f f b b a a c f f c
        c . a a a c c f c b a a c f a c
        c c a a a c c a a a b b a c a c
        a c a b b a a 6 a b b 6 b b c .
        b a c b b b 6 b c . c c a c . .
        b a c c a b b a c . . . . . . .
        b b a c a b a a . . . . . . . .
        a b 6 b b a c . . . . . . . . .
        . a a b c . . . . . . . . . . .
    `, SpriteKind.Enemy)
    enemy.setPosition(randint(0, 160), 0)
    enemy.setVelocity(0, 20)
})
info.setScore(0)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 200)
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite){
    otherSprite.destroy(effects.disintegrate, 200) 
    info.changeScoreBy(100)
})

