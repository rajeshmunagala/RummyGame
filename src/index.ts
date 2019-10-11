// import "reflect-metadata";
// import PIXI = require("pixi.js");
// import { Sprite, Texture } from "pixi.js";
// import { Context, MVCSBundle } from "@robotlegsjs/core";
// import { ContextView, PixiBundle, IMediatorMap } from "@robotlegsjs/pixi";
// import { GameConfig } from "./config/GameConfig";
// import { CardsTexture } from './view/CardsTexture';
// import { RobotlegsView } from "./view/RobotlegsView";
// import { SmileyView } from './view/SmileyView';

// export class Game {
//   private _app: PIXI.Application;
//   private context: Context;
//   private stage: PIXI.Container;
//   private stageTwo: PIXI.Container;
//   //private robotologo = new CardsTexture();
//   private robotologo = new RobotlegsView();
//   private cardTwo: Sprite;
//   private cardSeven: Sprite;
//   private cardFront: Sprite;
//   private cardBack: Sprite;
//   private texture: Texture;
//   private secondTexture: Texture;
//   private graphics: PIXI.Graphics;

//   private openCard: Boolean = false;
 
//   constructor() {
//     this._app = new PIXI.Application({
//       width: 960,
//       height: 600,
//       backgroundColor:  0x800080,
//       resolution: window.devicePixelRatio || 1
//     });


//     this.stage = new PIXI.Container();
//     this.context = new Context();
//     this.context
//       .install(MVCSBundle, PixiBundle)
//       .configure(new ContextView(this.stage))
//       .configure(GameConfig)
//       .initialize();
//     this.graphics = new PIXI.Graphics();
//     this.graphics.lineStyle(2, 0xFEEB77, 1);
//     this.graphics.beginFill(0x650A5A);
//     this.graphics.drawRect(750, 340, 170, 235);
//     this.graphics.endFill();
//     //this.cardFront = PIXI.Sprite.fromImage("../../static/images/card_front_new.png");
//     this.texture = PIXI.Texture.fromImage("../../static/images/card_front_new.png")
//     this.secondTexture = PIXI.Texture.fromImage("../../static/images/two_card.png");
//     this.cardFront = new PIXI.Sprite(this.texture);
  
//     this.cardFront.scale.x = 0.3;
//     this.cardFront.scale.y = 0.3;
//     this.cardFront.interactive = true;
//     this.cardFront.buttonMode = true;
//     this.cardFront.on('click', onClick);


//     this.cardTwo = PIXI.Sprite.fromImage("../../static/images/two_card.png");
//     this.cardSeven = PIXI.Sprite.fromImage("../../static/images/seven_card.png");
    

//     // Set the initial position
//     this.cardTwo.anchor.set(0.5);

//     this.cardTwo.x = 960/2;
//     this.cardTwo.y = 600/2;

//     this.cardTwo.scale.x = 0.3;
//     this.cardTwo.scale.y = 0.3;

//     // Opt-in to interactivity
//     this.cardTwo.interactive = true;

//     // Shows hand cursor
//     this.cardTwo.buttonMode = true;

//     // Set the initial position
//     this.cardSeven.anchor.set(0.5);

//     this.cardSeven.x = 960/4;
//     this.cardSeven.y = 600/4;

//     this.cardSeven.scale.x = 0.3;
//     this.cardSeven.scale.y = 0.3;

//     // Opt-in to interactivity
//     this.cardSeven.interactive = true;

//     // Shows hand cursor
//     this.cardSeven.buttonMode = true;

//     this.cardTwo
//         .on('pointerdown', onDragStart)
//         .on('pointerup', onDragEnd)
//         .on('pointerupoutside', onDragEnd)
//         .on('pointermove', onDragMove);
    
//     this.cardSeven
//       .on('pointerdown', onDragStart)
//       .on('pointerup', onDragEnd)
//       .on('pointerupoutside', onDragEnd)
//       .on('pointermove', onDragMove);


//     function onDragStart(event) {
//       this.data = event.data;
//       this.alpha = 0.5;
//       this.dragging = true;
//     }
//   function onDragEnd() {
//     this.alpha = 1;
//     this.dragging = false;
//     this.data = null;
//   }

//   function onDragMove() {
//       if (this.dragging) {
//           var newPosition = this.data.getLocalPosition(this.parent);
//           this.x = newPosition.x;
//           this.y = newPosition.y;
//       }
//   }

//   function onClick(){
//     this.openCard = !this.openCard;

//     if(this.openCard)
//     {
//       console.log("am I working... sucess");
      
//       this.cardFront.texture = this.secondTexture;
      
      
      
//     }
//     else
//     {
//       console.log("am I working... failure...");
//       this.cardFront.texture = this.texture;
//       //this.cardFront = new PIXI.Sprite(this.texture);
//     }
    
//   }

 
//     this._app.stage.addChild(this.graphics);
//     this._app.stage.addChild(this.cardFront);
//     this._app.stage.addChild(this.cardTwo);
//     this._app.stage.addChild(this.cardSeven);
//     this._app.stage.addChild(this.robotologo);
    
//     document.body.appendChild(this._app.view);
//     this.render();
//   }

//   public render = () => {
//     this._app.renderer.render(this._app.stage);
//     window.requestAnimationFrame(this.render);
//   };

//   // private canvas: HTMLCanvasElement;
//   //   private stage: PIXI.Container;
//   //   private renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;
//   //   private context: Context;

//   //   constructor() {
//   //       this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
//   //       this.renderer = PIXI.autoDetectRenderer(960, 400, { view: this.canvas, backgroundColor: 0xf7f7f7 });
//   //       this.stage = new PIXI.Container();

//   //       this.context = new Context();
//   //       this.context
//   //           .install(MVCSBundle, PixiBundle)
//   //           .configure(new ContextView(this.stage))
//   //           .configure(GameConfig)
//   //           .initialize();

//   //       this.stage.addChild(new RobotlegsView());

//   //       document.body.appendChild(this.renderer.view);

//   //       this.render();
//   //   }

//   //   public render = () => {
//   //       this.renderer.render(this.stage);
//   //       window.requestAnimationFrame(this.render);
//   //   };

// }


// let game: Game = new Game();

/// <reference path="../definitions\pixi.d.ts" />
import "reflect-metadata";
import { Game } from "./Game";

//let game: Game = new Game();
(<any>window).initGame = () => {
    let game: Game = new Game();
    (<any>window).game = game;
};