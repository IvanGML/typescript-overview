import fs from 'fs';

export abstract class CsvFileReader<T> {
    data: T[] = [];

    abstract mapRow(row: string[]): T;

    constructor(public filename: string) {}
    read() {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8',
        })
        .split('\n')
        .map((item: string): string[] => item.split(','))
        .map(this.mapRow)
    }
}