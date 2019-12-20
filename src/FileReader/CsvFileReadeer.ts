import fs from 'fs';
import { MatchData } from './MatchResult.types';


export abstract class CsvFileReader {
    data: MatchData[] = [];

    abstract mapRow(row: string[]): MatchData;

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