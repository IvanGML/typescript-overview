import { getDateFromString } from './utils'
import { MatchResult, MatchData } from './MatchResult.types';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = [];
    constructor(public reader: DataReader) {
        this.reader.read(); // <-- this is example of deligation, strongest tool in inheritance
        this.matches = this.reader.data.map((row: string[]): MatchData => {
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
};
