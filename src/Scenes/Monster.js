class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX+85, this.bodyY+75, "monsterParts", "arm_redC.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX-90, this.bodyY+75, "monsterParts", "arm_greenC.png");
        my.sprite.Eye = this.add.sprite(this.bodyX, this.bodyY-30, "monsterParts", "eye_angry_red.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX+70, this.bodyY+95, "monsterParts", "leg_redE.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX-70, this.bodyY+95, "monsterParts", "leg_redE.png");
        my.sprite.happy = this.add.sprite(this.bodyX, this.bodyY+15, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+15, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.horn = this.add.sprite(this.bodyX+65, this.bodyY-50, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.ant = this.add.sprite(this.bodyX-50, this.bodyY-75, "monsterParts", "detail_green_antenna_large.png");
      
        my.sprite.fangs.visible = false;

        my.sprite.leftLeg.flipX = true;
        my.sprite.leftArm.flipX = true; 
        my.sprite.ant.flipX = true;   

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down',()=>{
            my.sprite.happy.visible = false;
            my.sprite.fangs.visible = true;

        });

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down',()=>{
            my.sprite.happy.visible = true;
            my.sprite.fangs.visible = false;

        });

        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.dKey.isDown){
            this.my.sprite.body.x  += 2;
            this.my.sprite.rightArm.x  += 2;
            this.my.sprite.leftArm.x += 2;
            this.my.sprite.Eye.x += 2;
            this.my.sprite.rightLeg.x += 2;
            this.my.sprite.leftLeg.x += 2;
            this.my.sprite.happy.x += 2;
            this.my.sprite.fangs.x += 2;
            this.my.sprite.ant.x += 2;
            this.my.sprite.horn.x += 2;

        }

        if(this.aKey.isDown){
            this.my.sprite.body.x  -= 2;
            this.my.sprite.rightArm.x  -= 2;
            this.my.sprite.leftArm.x -= 2;
            this.my.sprite.Eye.x -= 2;
            this.my.sprite.rightLeg.x -= 2;
            this.my.sprite.leftLeg.x -= 2;
            this.my.sprite.happy.x -= 2;
            this.my.sprite.fangs.x -= 2;
            this.my.sprite.ant.x -= 2;
            this.my.sprite.horn.x -= 2;

        }
    }

}