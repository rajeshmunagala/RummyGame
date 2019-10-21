import { IConfig, IContext, IEventCommandMap, inject, injectable } from "@robotlegsjs/core";



@injectable()
export class GameConfig implements IConfig {
    @inject(IContext) private context: IContext;
    @inject(IEventCommandMap) private commandMap: IEventCommandMap;

    public configure(): void {
        console.log('testing -- 0');
    }
}
