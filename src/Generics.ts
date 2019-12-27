// example #1
class ArrayOfAnything<T> {
    constructor(public elements: T[]) {}
    get(elem: number): T {
        return this.elements[elem];
    }
}

const arrayOfStrings = new ArrayOfAnything<string>(['a', 'b', 'c']);
const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3]);

// example #2
class Car {
    constructor(public model: string) {}
    print():void {
        console.log(`this is the Car. model: ${this.model}`);
    }
}

class House {
    print():void {
        console.log('this is the Car.');
    }
}

interface Printable {
    print(): void;
}

function printIt<T extends Printable>(array: T[]):void {
    for (let index = 0; index < array.length; index++) {
        array[index].print();
    }
}

printIt<Car>([new Car('Shelby'), new Car('Roadster')]);
