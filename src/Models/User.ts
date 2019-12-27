import axios, { AxiosResponse } from "axios";

const host = 'http://localhost:3000/users/';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
};

type Callback = () => void;

export class User {
    events: {[key: string]: Callback[]} = {};
    constructor(private data: UserProps) {};

    get(propName: string): (number | string) {
        return this.data[propName];
    };

    set(update: UserProps): void {
        this.data = {...this.data, ...update}
    };

    on(eventName: string, callback: Callback) {
        const event = this.events[eventName] || [];
        event.push(callback);
        this.events[eventName] = event;
    };

    trigger(eventName: string): void {
        const handler = this.events[eventName];
        if(!handler || handler.length === 0) return;
        handler.forEach(callback => callback());
    }

    fetch(): void {
        axios.get(`${host}${this.get('id')}`)
            .then((response: AxiosResponse) => {
                this.set(response.data);
            })
    }

    save(): void {
        const id = this.get('id');

        if(id) {
            axios.put(`${host}${id}`, this.data);
        } else {
            axios.post(`${host}`, this.data);
        }
    }
};