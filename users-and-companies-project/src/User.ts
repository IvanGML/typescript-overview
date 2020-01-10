import faker from 'faker';

export class User {
    userName: string;
    location: {
        lat: number;
        lng: number;
    };


    constructor() {
        this.userName = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    getSumarry() {
        return `
            <h2>User name: ${this.userName}</h2>
        `;
    }
}