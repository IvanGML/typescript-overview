import { Sorter } from '../Sorter';

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    get length():number {
        return this.data.length;
    }

    compare(elementIndex: number):boolean {
        return this.data[elementIndex] > this.data[elementIndex + 1];
    }

    swap(elementIndex: number):void {
        let temp = this.data[elementIndex];
        this.data[elementIndex] = this.data[elementIndex+1];
        this.data[elementIndex+1] = temp;
    }
}