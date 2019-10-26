const text: string = `mark johansson waffle_iron 80 2
mark johansson blender 200 1
mark johansson knife 10 4
Nikita Smith waffle_iron 80 1
Nikita Smith knife 10 2
Nikita Smith pot 20 3`;

interface IOutput {
    [propName: string]: string[] | number[];
}

const output: IOutput = text
    .trim()
    .split('\n')
    .map((item: string) => item.split(' '))
    .reduce((customers, [name, surname, item, price, quantity]) => {
        const customer: string = `${name} ${surname}`;
        customers[customer] = customers[customer] || [];
        customers[customer].push({item, price: +price, quantity: +quantity});
        return customers;
    }, {});

console.log('output', output);
