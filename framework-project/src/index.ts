import { UserList} from './View/UserList';
import { User, UserProps } from './Models/User';
import { Collection } from './Models/Collection';
import { UserEdit } from './View/UserEdit';

const rootEdit = document.getElementById('root-edit');
const user = User.buildUser({ name: 'New user', age: 0 });
if (rootEdit) {
    const userEdit = new UserEdit(rootEdit, user);
    userEdit.render();
};

const users = new Collection<User, UserProps>(
    'http://localhost:3000/users',
    (json: UserProps): User => {
        return User.buildUser(json);
    }
);

const update = (): void => {
    const root = document.getElementById('root');
    
    if(root) {
        new UserList(root, users).render();
    }
};

user.on('save', () => {
    users.models = [];
    users.fetch();
    update();
});

users.on('change', update);

users.fetch();
