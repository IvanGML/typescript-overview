import { User } from './Models/User';

const user = User.buildUser({ id:1, name: 'John', age: 25 });
user.on('change', () => console.log(user));
user.fetch();