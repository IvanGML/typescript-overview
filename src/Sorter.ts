interface ISortable {
    length: number;
    swap(index: number): void;
    compare(index: number): boolean;
}

export class Sorter {
    constructor(public collection: ISortable) {};

    sort():void {
        let arrLength = this.collection.length;
        while(arrLength > 0) {
            for(let i = 0; i < arrLength-1; i++) {
                if (this.collection.compare(i)) {
                    this.collection.swap(i);
                }
            }
            arrLength--;
        }
    }
}