import fs from 'fs';
import { getDateFromString } from './utils'
import { MatchResult, MatchData } from './MatchResult.types';


export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {}
    read() {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8',
        })
        .split('\n')
        .map((item: string): string[] => item.split(','))
        .map((row: string[]): MatchData => {
            return [
                getDateFromString(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })
    }
}