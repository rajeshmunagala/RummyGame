import { Container, Sprite, Graphics } from "pixi.js";



export class GameView extends Container {


    constructor() {
        super();
        console.log('from the Game View...');
        this.createBackgrounds();
    }

    public destroy(): void {
    }

    public createComponents(): void {
    
       
    }
    private createBackgrounds(): void {
        const background: Graphics = new Graphics();
        let color = 0xfffff;
        background.beginFill(color);
        background.drawRect(0, 0, 800, 600);
        this.addChild(background);
        console.log(this);
    }
}
