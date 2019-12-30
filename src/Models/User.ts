import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse, AxiosError } from 'axios';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
};

const rootUrl: string = 'http://localhost:3000/users';

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributs: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributs = new Attributes<UserProps>(attrs);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributs.get;
    }

    set(data: UserProps): void {
        this.attributs.set(data);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributs.get('id');

        if(typeof id !== 'number') {
            throw new Error('Imposible to fetch without and id.')
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    }

    save(): void {
        this.sync.save(this.attributs.getAll())
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch((error: AxiosError) => {
                this.trigger('error');
            })
    }
};