import { EventDispatcher, IEventDispatcher, inject, injectable } from "@robotlegsjs/core";
import { PalidorEvent } from "@robotlegsjs/pixi-palidor";

import { FlowEvent } from "./../events/FlowEvent";

@injectable()
export class FlowService {
    @inject(IEventDispatcher) private eventDispatcher: IEventDispatcher;

    // Views
    public setGameView(): void {
        this.dispatchEventWith(FlowEvent.SHOW_GAME_VIEW);
    }
    public setHomeView(): void {
        this.dispatchEventWith(FlowEvent.SHOW_HOME_VIEW);
    }
    // extras
    public closePopup(): void {
        this.dispatchEventWith(PalidorEvent.REMOVE_LAST_FLOATING_VIEW_ADDED);
    }
    public dispatchEventWith(type: string): void {
        console.log("Iam from flowService....");
        (<EventDispatcher>this.eventDispatcher).dispatchEventWith(type);
    }
}
