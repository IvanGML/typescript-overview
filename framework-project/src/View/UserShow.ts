import { View } from './View';
import { User, UserProps } from '../Models/User';

export class UserShow extends View<User, UserProps> {
    template(): string {
        const id = this.model.get('id');
        return `
        <div>
            ${ id === undefined ?
                '<h1>Add new user</h1>' :
                '<h3>user id:' + id + '</h3>' }
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
        </div>
        `;
    }
}