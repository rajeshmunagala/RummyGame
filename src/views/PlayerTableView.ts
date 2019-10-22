import { Container, Text, Sprite, Graphics } from "pixi.js";

import { AtlasKeys } from "./../utils/AtlasKeys";
import { Colors } from "./../utils/Colors";
import { PixiFactory } from "./../utils/PixiFactory";
import { Texts } from "./../utils/Texts";
import { ViewPortSize } from "./../utils/ViewPortSize";
import { CustomButton } from "./components/CustomButton";

export class PlayerTableView extends Container {
    private _homeButton: CustomButton;
    public get homeButton(): CustomButton {
        return this._homeButton;
    }

    private _resetButton: CustomButton;
    public get resetButton(): CustomButton {
        return this._resetButton;
    }

    private _playNowButton: CustomButton;
    public get playNowButton(): CustomButton {
        return this._playNowButton;
    }

    constructor() {
        super();

        this.setupBackground();
        this.setupPlayerTable();
        this.setupButtons();
        //this.setupTexts();
    }
    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
        this.addChild(PixiFactory.getBackgroundImage());
    }
    private setupButtons(): void {
        this._homeButton = PixiFactory.getButton(AtlasKeys.BUTTON_HOME);
        this._homeButton.x = ViewPortSize.MAX_WIDTH - 30;
        this._homeButton.y = 30;
        this.addChild(this._homeButton);

        this._resetButton = PixiFactory.getButton(AtlasKeys.BUTTON_RESET);
        this._resetButton.x = ViewPortSize.MAX_WIDTH - 76;
        this._resetButton.y = 116;
        this.addChild(this._resetButton);
    }
    private setupTexts(): void {
        // const title: Text = PixiFactory.getText(Texts.CONFIG);
        // title.x = 15;
        // title.y = 18;
        // this.addChild(title);

        // const hiScore: Text = PixiFactory.getText(Texts.HI_SCORE, Colors.STATIC_TEXT);
        // hiScore.x = 15;
        // hiScore.y = 105;
        // this.addChild(hiScore);
    }
    private setupPlayerTable(): void {
        const tableHeaderBg: Graphics = new Graphics();
        tableHeaderBg.beginFill(0x220b36);
        tableHeaderBg.drawRoundedRect(ViewPortSize.MAX_WIDTH * 0.15, 70, ViewPortSize.MAX_WIDTH * 0.7, 60, 16);
        tableHeaderBg.endFill();
        this.addChild(tableHeaderBg);

        // const playNowButton: Sprite = PixiFactory.getImage(AtlasKeys.BUTTON_PLAY_NOW);
        // playNowButton.anchor.set(0.5);
        // playNowButton.x = 70;
        // playNowButton.y = 75;
        //this.addChild(playNowButton);
        this._playNowButton = PixiFactory.getButton(AtlasKeys.BUTTON_PLAY_NOW);
        this._playNowButton.scale.set(0.7);
        this._playNowButton.x = 300;
        this._playNowButton.y = 100;
        this.addChild(this._playNowButton);

        // const playNowButtonTwo: Graphics = new Graphics();
        // playNowButtonTwo.beginFill(0xc59031);
        // playNowButtonTwo.drawRoundedRect(140, 80, 200, 40, 10);
        // playNowButtonTwo.endFill();
        // this.addChild(playNowButtonTwo);

        // const playNowText: Text = PixiFactory.getText(Texts.PLAY_NOW, Colors.TEXTCOLOR_TWO, Texts.FONT_SIZE_DEFAULT);
        // playNowText.x = 180;
        // playNowText.y = 90;
        // this.addChild(playNowText);

        const myAccountText: Text = PixiFactory.getText(Texts.MY_ACCOUNT, Colors.TEXTCOLOR_ONE, Texts.FONT_SIZE_DEFAULT);
        myAccountText.x = 450;
        myAccountText.y = 90;
        this.addChild(myAccountText);

        const promotionsText: Text = PixiFactory.getText(Texts.PROMOTIONS, Colors.TEXTCOLOR_ONE, Texts.FONT_SIZE_DEFAULT);
        promotionsText.x = 650;
        promotionsText.y = 90;
        this.addChild(promotionsText);

        const bringAFriendText: Text = PixiFactory.getText(Texts.BRING_A_FRIEND, Colors.TEXTCOLOR_ONE, Texts.FONT_SIZE_DEFAULT);
        bringAFriendText.x = 850;
        bringAFriendText.y = 90;
        this.addChild(bringAFriendText);

        const RPSText: Text = PixiFactory.getText(Texts.RPS, Colors.TEXTCOLOR_ONE, Texts.FONT_SIZE_DEFAULT);
        RPSText.x = 1100;
        RPSText.y = 90;
        this.addChild(RPSText);

        const tableBodyBg: Graphics = new Graphics();
        tableBodyBg.beginFill(0x00000, 0.7);
        tableBodyBg.drawRoundedRect(220, 140, ViewPortSize.MAX_WIDTH * 0.7, ViewPortSize.MAX_HEIGHT * 0.7, 16);
        tableBodyBg.endFill();
        this.addChild(tableBodyBg);

        const tableHeadingName: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_NAME, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingName.x = 280;
        tableHeadingName.y = 180;
        this.addChild(tableHeadingName);

        const tableHeadingDeals: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_DEALS, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingDeals.x = 380;
        tableHeadingDeals.y = 180;
        this.addChild(tableHeadingDeals);

        const tableHeadingMaxPlayers: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_MAX_PLAYERS, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingMaxPlayers.x = 480;
        tableHeadingMaxPlayers.y = 180;
        this.addChild(tableHeadingMaxPlayers);

        const tableHeadingEntryFee: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_ENTRY_FEE, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingEntryFee.x = 620;
        tableHeadingEntryFee.y = 180;
        this.addChild(tableHeadingEntryFee);

        const tableHeadingActivePlayers: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_ACTIVE_PLAYERS, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingActivePlayers.x = 770;
        tableHeadingActivePlayers.y = 180;
        this.addChild(tableHeadingActivePlayers);

        const tableHeadingRegistering: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_REGISTERING, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingRegistering.x = 940;
        tableHeadingRegistering.y = 180;
        this.addChild(tableHeadingRegistering);

        const tableHeadingAction: Text = PixiFactory.getText(Texts.PLAYER_TABLE_H_ACTION, Colors.TEXTCOLOR_YELLOW, Texts.FONT_SIZE_HUD);
        tableHeadingAction.x = 1080;
        tableHeadingAction.y = 180;
        this.addChild(tableHeadingAction);

        const tableRowBg: Graphics = new Graphics();
        tableRowBg.beginFill(0x220b36);
        tableRowBg.drawRoundedRect(220, 250, ViewPortSize.MAX_WIDTH * 0.7, 80, 16);
        tableRowBg.endFill();
        this.addChild(tableRowBg);

        let playButton: Sprite = PIXI.Sprite.fromImage(AtlasKeys.BUTTON_PLAY_NOW);
        playButton.scale.set(0.5);
        playButton.x = (ViewPortSize.MAX_WIDTH * 0.7) * 1.07;
        playButton.y = ViewPortSize.MAX_HEIGHT * 0.37;;
        this.addChild(playButton);

        let playButtonTwo: Sprite = PIXI.Sprite.fromImage(AtlasKeys.BUTTON_PLAY_NOW);
        playButtonTwo.scale.set(0.5);
        playButtonTwo.x = (ViewPortSize.MAX_WIDTH * 0.7) * 1.07;
        playButtonTwo.y = ViewPortSize.MAX_HEIGHT * 0.5;
        this.addChild(playButtonTwo);


        const tableRowBgTwo: Graphics = new Graphics();
        tableRowBgTwo.beginFill(0x220b36);
        tableRowBgTwo.drawRoundedRect(220, 450, ViewPortSize.MAX_WIDTH * 0.7, 80, 16);
        tableRowBgTwo.endFill();
        this.addChild(tableRowBgTwo);

        let playButtonThree: Sprite = PIXI.Sprite.fromImage(AtlasKeys.BUTTON_PLAY_NOW);
        playButtonThree.scale.set(0.5);
        playButtonThree.x = (ViewPortSize.MAX_WIDTH * 0.7) * 1.07;
        playButtonThree.y = ViewPortSize.MAX_HEIGHT * 0.63;
        this.addChild(playButtonThree);

        let playButtonFoure: Sprite = PIXI.Sprite.fromImage(AtlasKeys.BUTTON_PLAY_NOW);
        playButtonFoure.scale.set(0.5);
        playButtonFoure.x = (ViewPortSize.MAX_WIDTH * 0.7) * 1.07;
        playButtonFoure.y = ViewPortSize.MAX_HEIGHT * 0.77;
        this.addChild(playButtonFoure);

       
        

        

    }
}
