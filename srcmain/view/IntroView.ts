import { Container, Sprite, Text, Graphics } from "pixi.js";

export class IntroView extends Container {
    constructor() {
        super();

        this.setupBackground();
        this.setupImages();
        this.setupText();
    }

    private setupBackground(): void {
        const background: Graphics = new Graphics();
        let color = 0xffefed;
        background.beginFill(0xDE3249);
        background.drawRect(0, 0, 800, 600);
        this.addChild(background);
        console.log("I am here to setup background");
    }
    private setupImages(): void {
        const logo: Sprite = PIXI.Sprite.fromImage('../static/images/bg_img.png');
        logo.anchor.x = 0.5;
        logo.x = window.innerWidth;
        logo.y = window.innerHeight - 64;
        this.addChild(logo);
        console.log('Added logo');
    }
    private setupText(): void {
        const style = new PIXI.TextStyle({
            align: "center",
            fill: 0xfffff,
            fontFamily: "Arial",
            fontSize: 14,
            fontWeight: "bold"
        });
        
        const title: Text = new PIXI.Text("Hello World", style);
        
        title.anchor.set(0.5);
        title.x = 500;
        title.y = 200;
        this.addChild(title);
        console.log("added text...");
            
        
    }
}
