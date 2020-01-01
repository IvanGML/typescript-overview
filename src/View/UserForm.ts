import { User, UserProps } from '../Models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.update-name': this.onUpdateNameClick,
        }
    }

    onUpdateNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            this.model.set({ name: input.value})
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }
    
    template(): string {
        return `
            <div>
                <h1>User form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input type="text">
                <button class="set-age">Set random age</button>
                <button class="update-name">Update name</button>
            </div>
        `;
    }
}