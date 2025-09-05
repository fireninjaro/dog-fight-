// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010201020101010201020102010201010101010101010101010101010101010101010102010201020102010201020202010101010101010101010101010101010102010201020102010201020102010101010101010101010101010101010101010101020102010201020102010202020101010101010101010101010101010101010101010101010101010101010101010201010102010101020101010201010102010201020102010201020102010101010101010101010101010101010101010101010101010101010101010101010201020102010102010201020102020201010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. 2 . 2 . . . 2 . 2 . 2 . 2 . . 
. . . . . . . . . . . . . . . . 
. . . 2 . 2 . 2 . 2 . 2 . 2 . 2 
. . . . . . . . . . . . . . . . 
. 2 . 2 . 2 . 2 . 2 . 2 . 2 . . 
. . . . . . . . . . . . . . . . 
. . . 2 . 2 . 2 . 2 . 2 . 2 . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . 2 . . . 2 . . . 2 . . 
. 2 . 2 . 2 . 2 . 2 . 2 . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . 2 . 2 . . 2 . 2 . 2 . 2 . 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath8,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
