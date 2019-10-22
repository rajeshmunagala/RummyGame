import { Container, Sprite, Graphics } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { PixiFactory } from "./../utils/PixiFactory";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";
import { CustomIcon } from "./components/CustomIcon";

export class HomeView extends Container {
    private _startButton: CustomButton;
    public get startButton(): CustomButton {
        return this._startButton;
    }

    private _optionButton: CustomButton;
    public get optionButton(): CustomButton {
        return this._optionButton;
    }
    private _cashGame: CustomButton;
    public get cashGame(): CustomButton {
        return this._cashGame;
    }
    private _tournamentGame: CustomButton;
    public get tournamentGame (): CustomButton {
        return this._tournamentGame;
    }
    private _practiceGame: CustomButton;
    public get practiceGame (): CustomButton {
        return this._practiceGame;
    }
    private _kingIcon: CustomIcon;
    public get kingIcon (): CustomIcon {
        return this._kingIcon;
    }
    private _addCashIcon: CustomIcon;
    public get addCashIcon (): CustomIcon {
        return this._addCashIcon;
    }
    private _funIcon: CustomIcon;
    public get funIcon (): CustomIcon {
        return this._funIcon;
    }
    private _bonusIcon: CustomIcon;
    public get bonusIcon (): CustomIcon {
        return this._bonusIcon;
    }
    private _winPrize: CustomButton;
    public get winPrize (): CustomButton {
        return this._winPrize;
    }

    constructor() {
        super();

        this.setupBackground();
        this.topNavBar();
        this.setupImages();
        this.setupButtons();
    }
    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
        this.addChild(PixiFactory.getBackgroundImage());
    }
    private setupImages(): void {
        
        const pointsCard: Sprite = PixiFactory.getImage(AtlasKeys.DEAL_CARD);
        pointsCard.anchor.set(0.5);
        pointsCard.x = ViewPortSize.HALF_WIDTH - ViewPortSize.HALF_WIDTH / 2 + 40 ;
        pointsCard.y =  ViewPortSize.MAX_HEIGHT * 0.55;
        pointsCard.scale.set(0.7);
        this.addChild(pointsCard);

        const poolCard: Sprite = PixiFactory.getImage(AtlasKeys.POOL_CARD);
        poolCard.anchor.set(0.5);
        poolCard.x = ViewPortSize.HALF_WIDTH + 40;
        poolCard.y =  ViewPortSize.MAX_HEIGHT * 0.55;
        poolCard.scale.set(0.7);
        this.addChild(poolCard);

        const dealCard: Sprite = PixiFactory.getImage(AtlasKeys.DEAL_CARD);
        dealCard.anchor.set(0.5);
        dealCard.x = ViewPortSize.HALF_WIDTH + ViewPortSize.HALF_WIDTH / 2 + 40;
        dealCard.y =  ViewPortSize.MAX_HEIGHT * 0.55;
        dealCard.scale.set(0.7);
        this.addChild(dealCard);

      
    }
    private setupButtons(): void {
        this._startButton = PixiFactory.getButton(AtlasKeys.BUTTON_START);
        this._startButton.x = ViewPortSize.MAX_WIDTH;
        this._startButton.y = ViewPortSize.MAX_HEIGHT;
        this.addChild(this._startButton);

        // this._optionButton = PixiFactory.getButton(AtlasKeys.BUTTON_CONFIG);
        // this._optionButton.x = ViewPortSize.HALF_WIDTH;
        // this._optionButton.y = ViewPortSize.MAX_HEIGHT * 0.8;
        // this.addChild(this._optionButton);

        this._cashGame = PixiFactory.getButton(AtlasKeys.BUTTON_CASH_GMAE);
        this._cashGame.anchor.set(0, 0)
        this._cashGame.x = 0;
        this._cashGame.y = 300;
        this._cashGame.scale.set(0.5);
        this.addChild(this._cashGame);

        this._tournamentGame = PixiFactory.getButton(AtlasKeys.BUTTON_TOURNAMENT);
        this.tournamentGame.anchor.set(0, 0);
        this._tournamentGame.x = 0;
        this._tournamentGame.y = 400;
        this._tournamentGame.scale.set(0.5);
        this.addChild(this._tournamentGame);

        this._practiceGame = PixiFactory.getButton(AtlasKeys.BUTTON_PRACTICE);
        this._practiceGame.anchor.set(0, 0);
        this._practiceGame.x = 0;
        this._practiceGame.y = 500;
        this._practiceGame.scale.set(0.5);
        this.addChild(this._practiceGame);

    }

    private topNavBar(): void {
        let topBarBackground: Graphics = new Graphics();
        topBarBackground.beginFill(0x000000, 0.2);
        topBarBackground.drawRect(0, 0, ViewPortSize.MAX_WIDTH, 100);
        this.addChild(topBarBackground);

        this._kingIcon = PixiFactory.getIcon(AtlasKeys.KING_ICON);
        this._kingIcon.x = 50;
        this._kingIcon.y = 50;
        
        this.addChild(this._kingIcon);

        this._addCashIcon = PixiFactory.getIcon(AtlasKeys.ADDCASH_ICON);
        this._addCashIcon.x = ViewPortSize.MAX_WIDTH - 250;
        this._addCashIcon.y = 50;
        this.addChild(this._addCashIcon);

        this._funIcon = PixiFactory.getIcon(AtlasKeys.FUN_ICON);
        this._funIcon.x = ViewPortSize.MAX_WIDTH - 150;
        this._funIcon.y = 50;
        this.addChild(this._funIcon);

        this._bonusIcon = PixiFactory.getIcon(AtlasKeys.BONUS_ICON);
        this._bonusIcon.x = ViewPortSize.MAX_WIDTH - 50;
        this._bonusIcon.y = 50;
        this._bonusIcon.scale.set(0.3)
        this.addChild(this._bonusIcon);

        this._winPrize = PixiFactory.getButton(AtlasKeys.BUTTON_WIN_PRIZE);
        this._winPrize.anchor.set(0, 0);
        this._winPrize.x = ViewPortSize.MAX_WIDTH - 300;
        this._winPrize.y = ViewPortSize.MAX_HEIGHT - 100;
        this._winPrize.scale.set(0.5);
        this.addChild(this._winPrize);

    }
}
 