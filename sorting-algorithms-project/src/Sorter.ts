export abstract class Sorter {
    abstract length: number;
    abstract compare (index: number): boolean;
    abstract swap (index: number): void;

    sort():void {
        let { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if(this.compare(j)) {
                    this.swap(j);
                }
            }
        }
    }
}