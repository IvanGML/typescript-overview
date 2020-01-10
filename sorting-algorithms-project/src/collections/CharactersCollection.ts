import { Sorter } from '../Sorter';

export class CharactersCollection extends Sorter{
    constructor(public data: string) {
        super();
    }

    get length():number {
        return this.data.length;
    }

    compare(elementIndex: number):boolean {
        return this.data[elementIndex].toLowerCase() > this.data[elementIndex + 1].toLowerCase();
    }

    swap(elementIndex: number):void {
        const characters = this.data.split('');

        let temp = characters[elementIndex];
        characters[elementIndex] = characters[elementIndex + 1];
        characters[elementIndex + 1] = temp;

        this.data = characters.join('');
    }
}