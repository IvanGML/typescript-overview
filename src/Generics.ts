class ArrayOfAnything<T> {
    constructor(public elements: T[]) {}
    get(elem: number): T {
        return this.elements[elem];
    }
}

const arrayOfStrings = new ArrayOfAnything<string>(['a', 'b', 'c']);
const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3]);