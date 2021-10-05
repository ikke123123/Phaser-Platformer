var enemySpeed = 100;
var moveSpeed = 40;
var hSpeed = 0;
var vSpeed = 0;
var minSpeed = -400;
var maxSpeed = 400;
var friction = 0.90;

var game = new Phaser.Game(800,600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render});

function preload() {
    game.load.tilemap('tilelayer1', 'assets/tilemaps/csv/level1_l1.csv', null, Phaser.Tilemap.CSV);
    game.load.tilemap('tilelayer2', 'assets/tilemaps/csv/level1_l2.csv', null, Phaser.Tilemap.CSV);
    game.load.tilemap('tilelayer3', 'assets/tilemaps/csv/level1_l3.csv', null, Phaser.Tilemap.CSV);
    game.load.tilemap('tilelayer4', 'assets/tilemaps/csv/level1_l4.csv', null, Phaser.Tilemap.CSV);
    game.load.tilemap('tilelayer5', 'assets/tilemaps/csv/level1_l5.csv', null, Phaser.Tilemap.CSV);

    game.load.image('tile1', 'assets/tilemaps/tiles/sheet_9.png');
    game.load.image('tile2', 'assets/tilemaps/tiles/sheet_1.png');
}

var map;
var layer;
var cursors;

function create() {
    map = game.add.tilemap('tilelayer1', 16, 16);
    map.addTilesetImage('tile1');
    
    layer = map.createLayer(0);
    layer.resizeWorld();

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        game.camera.y -= 4;
    }
    else if (cursors.right.isDown) {
        game.camera.y += 4;
    }
    
    if (cursors.up.isDown) {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown) {
        game.camera.y += 4;
    }
}

function render() {

}