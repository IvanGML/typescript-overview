class Sorter {
    constructor(public collection: number[]) {};

    sort():void {
        let arrLength = this.collection.length;
        while(arrLength > 0) {
            for(let i = 0; i < arrLength-1; i++) {
                if (this.collection[i] > this.collection[i+1]) {
                    let temp = this.collection[i];
                    this.collection[i] = this.collection[i+1];
                    this.collection[i+1] = temp;
                }
            }
            arrLength--;
        }
    }
}

const sorter = new Sorter([3, -3, 2, 10, -10]);
sorter.sort();