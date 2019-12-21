import { CsvFileReader } from './CsvFileReadeer';
import { MatchData, MatchResult } from './MatchResult.types';
import { getDateFromString } from './utils';

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            getDateFromString(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}