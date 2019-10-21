import { IConfig, inject, injectable } from "@robotlegsjs/core";
import { IMediatorMap } from "@robotlegsjs/pixi";

import { IntroView } from './../view/IntroView';
import { HomeView } from './../view/HomeView';
import { GameView } from './../view/GameView';
import { CardsTexture } from './../view/CardsTexture';
import { Card } from './../view/Card';

import { HomeViewMediator } from './../mediator/HomeViewMediator';
import { GameViewMediator } from './../mediator/GameViewMediator';
import { IntroViewMediator } from './../mediator/IntroViewMediator';
import { RobotlegsMediator } from "../mediator/RobotlegsMediator";
import { SmileyMediator } from "../mediator/SmileyMediator";
import { RobotlegsView } from "../view/RobotlegsView";
import { SmileyView } from "../view/SmileyView";
import { CardMediator } from "../mediator/CardMediator";
import { CardTexureMediator } from './../mediator/CardTextureMediator';



@injectable()
export class ViewsConfig implements IConfig {
    @inject(IMediatorMap) private mediatorMap: IMediatorMap;

    public configure(): void {
        this.mapMediators();
    }
    private mapMediators(): void {
        this.mediatorMap.map(GameView).toMediator(GameViewMediator);
        this.mediatorMap.map(HomeView).toMediator(HomeViewMediator);
        this.mediatorMap.map(IntroView).toMediator(IntroViewMediator);
        this.mediatorMap.map(RobotlegsView).toMediator(RobotlegsMediator);
        this.mediatorMap.map(SmileyView).toMediator(SmileyMediator);
        this.mediatorMap.map(CardsTexture).toMediator(CardTexureMediator);
        this.mediatorMap.map(Card).toMediator(CardMediator);
}

}
