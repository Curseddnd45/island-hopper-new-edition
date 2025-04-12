scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`chestOpen`)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menuopen == false) {
        controller.moveSprite(mySprite, 0, 0)
        if (Waepons == true) {
            story.showPlayerChoices("Essentials", "Weapons")
            if (story.checkLastAnswer("Weapons")) {
                story.showPlayerChoices("Weapons: Melee", "Weapons: Ranged", "Weapons: Armour")
            } else {
                story.showPlayerChoices("Essentials: Food", "Essentials: Water Supply")
            }
        } else {
            story.showPlayerChoices("Essentials: Food", "Essentials: Water Supply")
            if (story.checkLastAnswer("Essentials: Food")) {
                Menuopen = true
                myMenu = miniMenu.createMenuFromArray(Food_menu)
                myMenu.setTitle("Backpack")
                myMenu.setFrame(img`
                    111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111
                    1111ffff1111ff111ffff111ffff11111111ff1111111111
                    111fffffff1ffff1ffffff1ffffff11fff1ffff11ffff111
                    111ffffffffffffffffffffffffffffffffffff1ffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    11111ffffffffffffffffffffffffffffffffffffffff111
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    111fffffffffffffffffffffffffffffffffffffffff1111
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    11ffffffffffffffffffffffffffffffffffffffffffff11
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    11ffffffffffffffffffffffffffffffffffffffffffff11
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    11dffffffffffffffffffffffffffffffffffddfffffff11
                    1dddfffffffffffffffffffffffffffffffffddfffffff11
                    1dddfffffffffffffffffffffffffffffffffddffffddf11
                    1dfdfffffffffddddffffffffffffddffffffdddfffddd11
                    1dddfffdddffffd5ddfffffffffffd5fffffddddfffddd11
                    1dfdffdddddff5d5ddfffffffffffd5dddffdfddfffddd11
                    1dddffdfd5dfffdfdffddffdddddfd5ffdffdddddddddd11
                    1d5dffdddddffddddffddffdddddfdddddddddfddd555ddd
                    ddddffdfdfdffdfffdfddffdddfdfdf5fddddddddddddddd
                    ddfdfdddddddddddddfddffdfddddddddddddfdddd555ddd
                    ddddfddf55dddd555dddddddd5ddddfffddddddddddddddd
                    ddfdfddddddddddddddddddddddddddddddddd5ddd555ddd
                    dddddddddddddddddddddddfdddddddddddddddddddddddd
                    ddddddddddddddddddddddddd5ddddddddddd5dddd555ddd
                    .dddddddddddddddddddddddddddddddddddddddddddddd.
                    ..dddddddddddddddddddddddddddddddddddddddddddd..
                    `)
                myMenu.setPosition(mySprite.x, mySprite.y)
                myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    Food_menu.removeAt(selectedIndex)
                    myMenu.moveSelection(miniMenu.MoveDirection.Up)
                })
            } else {
                Menuopen = true
                myMenu = miniMenu.createMenuFromArray(Water_Supply_menu)
                myMenu.setTitle("Backpack")
                myMenu.setFrame(img`
                    111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111
                    1111ffff1111ff111ffff111ffff11111111ff1111111111
                    111fffffff1ffff1ffffff1ffffff11fff1ffff11ffff111
                    111ffffffffffffffffffffffffffffffffffff1ffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    11111ffffffffffffffffffffffffffffffffffffffff111
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    111fffffffffffffffffffffffffffffffffffffffff1111
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    11ffffffffffffffffffffffffffffffffffffffffffff11
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    1111ffffffffffffffffffffffffffffffffffffffffff11
                    111fffffffffffffffffffffffffffffffffffffffffff11
                    11ffffffffffffffffffffffffffffffffffffffffffff11
                    11fffffffffffffffffffffffffffffffffffffffffff111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    11ffffffffffffffffffffffffffffffffffffffffff1111
                    111ffffffffffffffffffffffffffffffffffffffffff111
                    11dffffffffffffffffffffffffffffffffffddfffffff11
                    1dddfffffffffffffffffffffffffffffffffddfffffff11
                    1dddfffffffffffffffffffffffffffffffffddffffddf11
                    1dfdfffffffffddddffffffffffffddffffffdddfffddd11
                    1dddfffdddffffd5ddfffffffffffd5fffffddddfffddd11
                    1dfdffdddddff5d5ddfffffffffffd5dddffdfddfffddd11
                    1dddffdfd5dfffdfdffddffdddddfd5ffdffdddddddddd11
                    1d5dffdddddffddddffddffdddddfdddddddddfddd555ddd
                    ddddffdfdfdffdfffdfddffdddfdfdf5fddddddddddddddd
                    ddfdfdddddddddddddfddffdfddddddddddddfdddd555ddd
                    ddddfddf55dddd555dddddddd5ddddfffddddddddddddddd
                    ddfdfddddddddddddddddddddddddddddddddd5ddd555ddd
                    dddddddddddddddddddddddfdddddddddddddddddddddddd
                    ddddddddddddddddddddddddd5ddddddddddd5dddd555ddd
                    .dddddddddddddddddddddddddddddddddddddddddddddd.
                    ..dddddddddddddddddddddddddddddddddddddddddddd..
                    `)
                myMenu.setPosition(mySprite.x, mySprite.y)
                myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    Water_Supply_menu.removeAt(selectedIndex)
                    myMenu.moveSelection(miniMenu.MoveDirection.Up)
                })
            }
        }
    } else {
        myMenu.close()
        Menuopen = false
        controller.moveSprite(mySprite)
    }
})
let myMenu: miniMenu.MenuSprite = null
let Menuopen = false
let Water_Supply_menu: miniMenu.MenuItem[] = []
let Food_menu: miniMenu.MenuItem[] = []
let mySprite: Sprite = null
let Waepons = false
Waepons = false
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 . . . . . 2 2 . . . 
    . . . . 2 2 7 7 7 7 7 2 2 . . . 
    . . . . 2 2 7 a 7 a 7 2 2 . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 8 8 8 7 . . . . . 
    . . . . 8 6 7 7 7 7 7 6 8 . . . 
    . . . 8 8 6 6 6 6 6 6 6 8 8 . . 
    . . 8 8 8 6 6 6 6 6 6 6 8 8 8 . 
    . . 8 8 . 9 9 9 9 9 9 9 . 8 8 . 
    . . . . . 9 9 9 9 9 9 9 . . . . 
    . . . . . 9 9 9 9 9 9 9 . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
Food_menu = [miniMenu.createMenuItem("Rations", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 6 6 4 a 5 . . . . 
    . . . . . 7 7 6 4 4 5 5 . . . . 
    . . . . . 7 7 6 4 4 a 5 . . . . 
    . . e e e e e e e e e e e e . . 
    . . . e e e e e e e e e e . . . 
    . . . . e e e e e e e e . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `), miniMenu.createMenuItem("Rations", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 a 4 6 6 7 . . . . . . 
    . . . . 5 5 4 4 6 7 7 . . . . . 
    . . . . 5 a 4 4 6 7 7 . . . . . 
    . . e e e e e e e e e e e e . . 
    . . . e e e e e e e e e e . . . 
    . . . . e e e e e e e e . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)]
Water_Supply_menu = [miniMenu.createMenuItem("Small Bottle of Water", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . 8 8 2 8 8 8 . . . . . . 
    . . . . 8 8 8 2 8 8 . . . . . . 
    . . . . 6 6 2 6 6 6 . . . . . . 
    . . . . 6 6 6 2 6 6 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `), miniMenu.createMenuItem("Large Bottle of Water", img`
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 2 1 1 1 1 1 2 . . . . 
    . . . 1 1 1 2 1 2 1 2 1 1 . . . 
    . . . 1 1 1 1 2 1 2 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 6 1 6 1 6 1 6 1 . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 1 1 5 5 1 1 1 1 1 1 . . . 
    . . . 1 1 5 5 1 1 1 1 1 1 . . . 
    . . . 1 1 5 5 1 1 1 1 1 1 . . . 
    `)]
Menuopen = false
