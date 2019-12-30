import { User } from './Models/User';

const user = new User({ id:1, name: 'John', age: 29 });
user.on('save', () => console.log(user));
user.save();