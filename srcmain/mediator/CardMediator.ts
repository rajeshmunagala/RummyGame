
import { Mediator } from "@robotlegsjs/pixi";
import { Card } from './../view/Card';

export class CardMediator extends Mediator<Card> {
    public initialize(): void {
        console.log("ChildMediator initialized!");
        this.view.interactive = true;
        this.addViewListener("click", this.onClick, this);
    }

    public onClick(e: any): void {
        this.view.parent.removeChild(this.view);
    }

    public destroy(): void {
        console.log("ChildMediator destroyed!");
    }
}