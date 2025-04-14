// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000f0f0f0f0f0f0f0f0f0f0f0f0f0f0f100f10100f010203010202020202030f110f0f100f06080e060405080812070f110f10100f060808060808080808070f11100f0f0f0608080d0808080808070f110f11100f0608080608080808080711111111100f0608080608080808080711100f10100f0a0b090a0b0b0c08080711100f0f0f0f0f0f0f0f0f0f0f0a0b09111011111011100f100f10100f0f0f0f11100f1110101010100f101010100f1011100f0f0f0f10111010111010100f1011100f1010100f0f110f11110f11100f10100f100f0f1011110f0f101011100f0f100f100f0f1010101111111010101010110f100f0f10100f0f0f0f0f0f0f110f10`, img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 . . 
. . . . 2 . . 2 . . . . . 2 . . 
. . . . 2 . . 2 . . . . . 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 . . 2 . . . . . 2 . . 
. . . . 2 . . 2 . . . . . 2 . . 
. . . . 2 2 2 2 2 2 . . . 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,myTiles.tile3,myTiles.tile4,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenWest,myTiles.tile7,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "chestClosed":
            case "tile5":return tile5;
            case "chestOpen":
            case "tile6":return tile6;
            case "myTile3":
            case "tile7":return tile7;
            case "myTile5":
            case "tile9":return tile9;
            case "myTile4":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
