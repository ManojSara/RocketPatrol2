// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      scene.add.existing(this); // add object to existing scene
      this.isFiring = false;    // track rocket's firing status
      this.moveSpeed = 2;       // pixels per frame

      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        /*
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
        */
        // mouse movement
        if (!this.isFiring) {
            if(game.input.mousePointer.x >= borderUISize + this.width && game.input.mousePointer.x <= game.config.width - borderUISize - this.width) {
                this.x = game.input.mousePointer.x;
            }
        }

        // fire button
        if(game.input.activePointer.isDown && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }

        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}