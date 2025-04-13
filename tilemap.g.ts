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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100010101010101010101010101010101011101111100102030102020202020310121010111006080f06040508080907101210111110060808060808080808071012111010100608080e08080808080710121012111006080806080808080807121212121110060808060808080808071211101111100b0c0a0b0c0c0d080807121110101010101010101010100b0c0a121112121112111011101111101010101211101211111111111011111111101112111010101011121111121111111011121110111111101012101212101211101111101110101112121010111112111010111011101011111112121211111111111210111010111110101010101010121011`, img`
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
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,myTiles.tile3,myTiles.tile4,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenWest,myTiles.tile7,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
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
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
