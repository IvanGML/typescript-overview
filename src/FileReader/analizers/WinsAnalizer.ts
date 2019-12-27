import { Analizer } from '../Summary';
import { MatchData, MatchResult } from '../MatchResult.types';

export class WinsAnalises implements Analizer {
    constructor(public team: string) {};
    run(matches: MatchData[]): string {
        let winsCounter = 0;

        matches.forEach((item: MatchData)=>{
            let teamWinHome = item.indexOf(this.team) === 1 && item.indexOf(MatchResult.HomeWin) === 5;
            let teamWinAway = item.indexOf(this.team) === 2 && item.indexOf(MatchResult.AwayWin) === 5;
            if(teamWinHome || teamWinAway) winsCounter++;
        });

        return `${this.team} wins: ${winsCounter} times.`;
    }
}