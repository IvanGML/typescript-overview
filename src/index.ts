import { User } from './Models/User';

const user = new User({name: 'Ivan', age: 39});

console.log(user.get('name'));

user.on('change', () => console.log('user changed'));
user.set({ name: 'Peter' })
console.log(user);