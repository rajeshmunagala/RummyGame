// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/@robotlegsjs/pixi/definitions/pixi.d.ts" />
import "reflect-metadata";

import { Context, MVCSBundle } from "@robotlegsjs/core";
import { ContextView, PixiBundle } from "@robotlegsjs/pixi";
import { PalidorPixiExtension } from "@robotlegsjs/pixi-palidor";
import PIXI = require("pixi.js");
import { Container, Sprite, Text, Graphics } from "pixi.js";

import { GameConfig } from "./config/GameConfig";
import { PalidorConfig } from "./config/PalidorConfig";
import { ViewsConfig } from "./config/ViewsConfig";

export class Game {
    private stage: PIXI.Container;
    private renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;
    private context: Context;

    constructor() {
        this.renderer = PIXI.autoDetectRenderer(800, 600, {});
        this.stage = new PIXI.Container();
        this.context = new Context();
        //this.context.logLevel = <any>LogLevel.DEBUG;
        console.log("I am from the Game.ts Front =======");
        this.context
            .install(MVCSBundle, PixiBundle)
            .install(PalidorPixiExtension)
            .configure(new ContextView(this.stage))
            .configure(ViewsConfig, GameConfig, PalidorConfig)
            .initialize();

        document.body.appendChild(this.renderer.view);
        console.log("I am from the Game.ts End =======");
    }
    public render = () => {
        this.renderer.render(this.stage);
        window.requestAnimationFrame(this.render);
    };
}

