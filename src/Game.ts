
import PIXI = require("pixi.js");
import { Context, MVCSBundle } from "@robotlegsjs/core";
import { ContextView, PixiBundle } from "@robotlegsjs/pixi";
import { GameConfig } from './config/GameConfig';
import { CardsTexture } from './view/CardsTexture';
import { RobotlegsView } from "./view/RobotlegsView";
import { SmileyView } from './view/SmileyView';

export class Game {
    private canvas: HTMLCanvasElement;
    private stage: PIXI.Container;
    private app: PIXI.CanvasRenderer | PIXI.WebGLRenderer;
    private context: Context;
    private width = 1280;
    private height = 720;
    private robotLogo: RobotlegsView;
    


    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.app = PIXI.autoDetectRenderer(this.width, this.height, { view: this.canvas, backgroundColor: 0x009000 });
        this.stage = new PIXI.Container();

        this.context = new Context();
        this.context
            .install(MVCSBundle, PixiBundle)
            .configure(new ContextView(this.stage))
            .configure(GameConfig)
            .initialize();
        this.stage.addChild(new RobotlegsView());
        this.stage.addChild(new CardsTexture());

        
    
        this.app.autoResize = true;
        
        

        document.body.appendChild(this.app.view);
        // this.stage.addListener('resize', this.resize());
        //this.resize();
    

        this.render();
    }

    public render = () => {
        this.app.render(this.stage);
        window.requestAnimationFrame(this.render);
    };

    public resize() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        
        this.stage.scale.x = w / this.width;
        this.stage.scale.y = h / this.height;
        
        this.app.resize(w, h);
        
        this.width = w;
        this.height = h;
        }
}