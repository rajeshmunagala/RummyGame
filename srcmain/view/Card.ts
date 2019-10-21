import "reflect-metadata";
import { Container, Sprite } from "pixi.js";

export class Card extends Container {
    private card: Sprite;
    private static index1:number = 0;
    private suits: Array<string> = [ "hearts", "diams", "clubs", "spades" ];
    private cardValue:any[] = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
    private deck: any[];
    

    constructor() {
        super();
        this.makeDeck();
        this.shuffleDeck();
        this.addCard();
        this.move();
        this.enable();
    }
    private makeDeck(): void {
        this.deck = [];

        for( let i = 0; i < this.suits.length; i++ ) {
        
            for( let j = 0; j < this.cardValue.length; j++ ) {
            this.deck.push({cadValue: this.cardValue[j], suit: this.suits[i] });
            }
        }
    }
    private addCard(): void {
        let cardsImage = PIXI.Texture.fromImage("../../static/images/deck-of-cards.png").baseTexture;
        let t32Rect = new PIXI.Rectangle(0, 0, 167, 243);
        let newTex = new PIXI.Texture(cardsImage, t32Rect);
        this.card = new PIXI.Sprite(newTex);
        this.card.scale.set(3);
        this.card.anchor.x = 0;
        this.card.anchor.y = 0;
        this.card.position.x = 600 + Card.index1;
        this.card.position.y = 800;
        console.log(this.deck);
        // if(Card.index1 < 700){
            this.addChild(this.card);
        // } else {
        //     console.log('sevencads are done...');
        // }
        Card.index1 += 100;
    }

    private shuffleDeck():void {
        for(let i = this.deck.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i);
            
            let temp = this.deck[i];
            this.deck[i] = this.deck[randomIndex];
            this.deck[randomIndex] = temp;
          }
        
          console.log('shuffled Deck', this.deck);
    }

    private move(): void {
        this.scale.set(0.3);
          
    }
    private enable(): void {
        this.interactive = true;
        this.buttonMode = true;
    }

}