import "reflect-metadata";
import { Container, Sprite } from "pixi.js";

export class Card extends Container {
    private card: Sprite;
    private static index1:number = 0;

    constructor() {
        super();
        this.addCard();
        this.move();
        this.enable();
    }

    private addCard(): void {

        this.card = PIXI.Sprite.fromImage("../../static/images/seven_card.png");
        this.card.anchor.x = 0;
        this.card.anchor.y = 0;
        this.card.position.x = 600 + Card.index1;
        this.card.position.y = 800;
        if(Card.index1 < 700){
            this.addChild(this.card);
        } else {
            console.log('sevencads are done...');
        }
        Card.index1 += 100;
    }

    private move(): void {
        this.scale.set(0.3);
          
    }
    private enable(): void {
        this.interactive = true;
        this.buttonMode = true;
    }

}