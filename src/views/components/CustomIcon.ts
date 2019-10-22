import { Sprite, Texture } from "pixi.js";

import { AtlasKeys } from "../../utils/AtlasKeys";

export class CustomIcon extends Sprite {
    private _downState: Texture;
    private _overState: Texture;
    private _upState: Texture;

    private _isDown: boolean;
    private _isOver: boolean;

    constructor(atlasKey: string) {
        super(AtlasKeys.getTexture(atlasKey + ".png"));

        const downStateTexture: Texture = AtlasKeys.getTexture(atlasKey + ".png");
        const upStateTexture: Texture = AtlasKeys.getTexture(atlasKey + ".png");

        this._downState = downStateTexture;
       // this._overState = downStateTexture;
       // this._upState = upStateTexture;

        this.setInitialValues();
        this.setupInteractions();
    }
    private setInitialValues(): void {
        this.anchor.set(0.5);
        this.interactive = true;
        this.buttonMode = true;
    }
    private setupInteractions(): void {
        this.on("pointerup", this.onIconUp);
        this.on("pointerupoutside", this.onIconUp);
        this.on("pointerdown", this.onIconDown);
        //this.on("pointerover", this.onIconOver);
        this.on("pointerout", this.onIconOut);
    }
    private onIconDown(): void {
        this._isDown = true;
        this.texture = this._downState;
        //this.scale.set(0.95, 0.95);
    }
    private onIconOut(): void {
        this._isOver = false;
        this.texture = this._downState;
        //this.scale.set(1, 1);
    }
    private onIconOver(): void {
        this._isOver = true;
        this.texture = this._downState;
    }
    private onIconUp(): void {
        this._isDown = false;
        //this.scale.set(0, 0);

        if (this._isOver) {
            this.texture = this._downState;
           // this.scale.set(0.5);
        } else {
            this.texture = this._downState;
            //this.scale.set(0.5);
        }
    }
}
