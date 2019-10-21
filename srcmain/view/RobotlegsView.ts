import "reflect-metadata";
import { Container, Sprite } from "pixi.js";

export class RobotlegsView extends Container {
    private robotlegsLogo: Sprite;


    constructor() {
        super();
        this.loadLogo();
        this.move();
        this.enable();
    }
    private loadLogo(): void {
        this.robotlegsLogo = PIXI.Sprite.fromImage("../../static/images/logo.png");
        this.addChild(this.robotlegsLogo);
    }

    private move(): void {
        this.robotlegsLogo.anchor.set(0.5);
        this.robotlegsLogo.x = window.innerWidth * 0.5;
        this.robotlegsLogo.y = window.innerHeight * 0.5;
    }

    private enable(): void {
        this.interactive = true;
        this.buttonMode = true;
    }

    
}