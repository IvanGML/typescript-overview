type Callback = () => void;

export class Eventing {
    events: {[key: string]: Callback[]} = {};

    on = (eventName: string, callback: Callback) => {
        const event = this.events[eventName] || [];
        event.push(callback);
        this.events[eventName] = event;
    };

    trigger = (eventName: string): void => {
        const handler = this.events[eventName];
        if(!handler || handler.length === 0) return;
        handler.forEach(callback => callback());
    }
}