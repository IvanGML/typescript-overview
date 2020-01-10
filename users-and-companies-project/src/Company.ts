import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    getSumarry() {
        return `
            <h2>Company name: ${this.companyName}</h2>
            <p>Company catch phrase: ${this.catchPhrase}</p>
        `;
    }
}