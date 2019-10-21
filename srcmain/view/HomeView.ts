import { Container, Sprite, Graphics } from "pixi.js";


export class HomeView extends Container {
    
    constructor() {
        super();

        this.setupBackground();
        this.setupImages();
        this.setupButtons();
    }
    private setupBackground(): void {
        const background: Graphics = new Graphics();
        let color = 0xfefefe;
        background.beginFill(color);
        background.drawRect(0, 0, 800, 600);
        this.addChild(background);
    }
    private setupImages(): void {
        const logo: Sprite = PIXI.Sprite.fromImage('../static/images/logo.png');
        logo.anchor.set(0.5);
        logo.x = 400;
        logo.y = 600 * 0.3;
        this.addChild(logo);

       
    }
    private setupButtons(): void {
        
    }
}
