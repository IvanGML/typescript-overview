import { User } from './Models/User';

const users = User.userCollection();
users.fetch();
users.events.on('change', () => console.log('%c Users have been fetched.', 'color: green'));
console.log(users.models);

// const user = User.buildUser({ });
// user.set({ id:10, name: 'John', age: 30 });
// user.on('save', () => console.log(user));
// user.save();