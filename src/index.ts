import { User } from './Models/User';

const user = new User({ name: 'Vano', age: 29 });

user.on('click', () => console.log('hello'));
user.on('click', () => console.log('hello asshole'));
user.on('hower', () => console.log('hello'))

console.log(user);