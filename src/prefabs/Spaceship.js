// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  // add to existing scene
        this.points = pointValue;  // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;        // pixels per frame
        this.exploding = false;    // tracks if a player hit ship
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }

        // check if speed increased
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    // position reset
    reset() {
        this.x = game.config.width;
        this.exploding = false;
    }
}