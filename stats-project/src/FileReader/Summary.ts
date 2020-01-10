import { MatchData } from './MatchResult.types';

export interface Analizer {
    run(matches: MatchData[]): string;
}
export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analizer: Analizer, public outputTatget: OutputTarget) {}
    buildAndPrintReport(dataToReport: MatchData[]):void {
        const reportString = this.analizer.run(dataToReport);
        this.outputTatget.print(reportString);
    }
}