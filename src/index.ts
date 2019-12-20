import { MatchResult, MatchData } from './FileReader/MatchResult.types';
import { MatchReader } from './FileReader/MatchReader';

const footbalData = new MatchReader('football.csv');
footbalData.read();

let manUnitedWins = 0;

footbalData.data.forEach((item: MatchData)=>{
    let teamWinHome = item.indexOf('Man United') === 1 && item.indexOf(MatchResult.HomeWin) === 5;
    let teamWinAway = item.indexOf('Man United') === 2 && item.indexOf(MatchResult.AwayWin) === 5;
    if(teamWinHome || teamWinAway) manUnitedWins++;
});

console.log(`Man United wins: ${manUnitedWins} times.`);