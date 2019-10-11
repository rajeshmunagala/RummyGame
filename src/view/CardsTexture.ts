import { Container, Sprite, Texture } from "pixi.js";

export class CardsTexture extends Container {
    private cardFront: Sprite;

    constructor() {
        super();
        this.loadCards();
        this.move();
        this.enable();
     
    }
    private loadCards(): void {
        this.cardFront = PIXI.Sprite.fromImage("../../static/images/card_front_new.png");
        this.addChild(this.cardFront);
    }
    private move(): void {
        this.cardFront.scale.x = 0.3;
        this.cardFront.scale.y = 0.3;
    }
    private enable(): void {
        this.interactive = true;
        this.buttonMode = true;
      
    }
    


}