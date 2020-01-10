import { User, UserProps } from '../Models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.update-name': this.onUpdateNameClick,
            'click:.save-model': this.saveModelClick
        }
    }

    saveModelClick = (): void => {
        this.model.save();
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
                <input type="text" placeholder="${this.model.get('name')}">
                <button class="set-age">Set random age</button>
                <button class="update-name">Update name</button>
                <button class="save-model">Save user</button>
            </div>
        `;
    }
}