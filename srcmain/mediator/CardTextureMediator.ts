import "reflect-metadata";
import { Mediator } from "@robotlegsjs/pixi";
import { CardsTexture } from './../view/CardsTexture';
import { Card } from "../view/Card";
import { EventEmitter } from "eventemitter3"

export class CardTexureMediator extends Mediator<CardsTexture> {
    public initialize(): void {
        console.log("CircleMediator initialized!");
        this.view.interactive = true;
        this.addViewListener("click", this.onClick, this);
    }

    public onClick(e: any): void {

        console.log('emited...');
        let radius: number = 50 ;
        this.view.parent.addChild(new Card());
    }

    public destroy(): void {
        console.log("CircleMediator destroyed!");
    }
}