import "reflect-metadata";
import { Mediator } from "@robotlegsjs/pixi";
import { RobotlegsView } from "../view/RobotlegsView";
import { SmileyView } from "../view/SmileyView";
import { EventEmitter } from "eventemitter3"

export class RobotlegsMediator extends Mediator<RobotlegsView> {
    public initialize(): void {
        this.view.interactive = true;
        this.addViewListener("click", this.onClick, this);
    }

    public onClick(e: any): void {
        let radius: number = 50 + Math.random() * 50;
        this.view.parent.addChild(new SmileyView(radius));
    }

    public destroy(): void {
       
    }
}