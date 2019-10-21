import { Container, Sprite, Text } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { Colors } from "./../utils/Colors";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";

export class IntroView extends Container {
    constructor() {
        super();

        this.setupBackground();
        this.setupImages();
        this.setupText();
    }

    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
        this.addChild(PixiFactory.getBackgroundImage());
    }
    private setupImages(): void {
        const logo: Sprite = PIXI.Sprite.fromImage(AtlasKeys.LOGO_RUMMYMAZA);
        logo.anchor.x = 0.5;
        logo.x = ViewPortSize.HALF_WIDTH;
        logo.y = ViewPortSize.HALF_HEIGHT - 100;
        this.addChild(logo);
        const loadingBar: Sprite = PIXI.Sprite.fromImage(AtlasKeys.LOADING_BAR);
        loadingBar.anchor.x = 0.5;
        loadingBar.x = ViewPortSize.HALF_WIDTH;
        loadingBar.y = ViewPortSize.HALF_HEIGHT + 100;
        this.addChild(loadingBar);
    }
    private setupText(): void {
        const loadingText: Text = PixiFactory.getText(Texts.lOADING_TEXT, Colors.TEXTCOLOR_ONE, Texts.LOADING_FONT_SIZE);
        loadingText.anchor.set(0.5);
        loadingText.x = ViewPortSize.HALF_WIDTH;
        loadingText.y = ViewPortSize.MAX_HEIGHT - 64;
        this.addChild(loadingText);
    }
}
