
import "reflect-metadata";
import { inject, injectable, IConfig, decorate, Command } from "@robotlegsjs/core";
import { IMediatorMap } from "@robotlegsjs/pixi";
import { RobotlegsMediator } from "../mediator/RobotlegsMediator";
import { SmileyMediator } from "../mediator/SmileyMediator";
import { RobotlegsView } from "../view/RobotlegsView";
import { SmileyView } from "../view/SmileyView";
import { CardMediator } from "../mediator/CardMediator";
import { CardTexureMediator } from './../mediator/CardTextureMediator';
import { CardsTexture } from './../view/CardsTexture';
import { Card } from './../view/Card';

@injectable()
export class GameConfig implements IConfig {
    @inject(IMediatorMap)
    private mediatorMap: IMediatorMap;

    public configure(): void {
        this.mediatorMap.map(RobotlegsView).toMediator(RobotlegsMediator);
        this.mediatorMap.map(SmileyView).toMediator(SmileyMediator);
        this.mediatorMap.map(CardsTexture).toMediator(CardTexureMediator);
        this.mediatorMap.map(Card).toMediator(CardMediator);
    }
}
decorate(injectable(), Command);
