import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

interface IModel<T> {
    set(update: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface ISync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise
}

interface IEventing {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: IModel<T>,
        private events: IEventing,
        private sync: ISync<T>
    ){}

    on = this.events.on;
    get = this.attributes.get;
    trigger = this.events.trigger;

    set(data: T): void {
        this.attributes.set(data);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');

        if(typeof id !== 'number') {
            throw new Error('Imposible to fetch without and id.')
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch((error: AxiosError) => {
                this.trigger('error');
            })
    }
}