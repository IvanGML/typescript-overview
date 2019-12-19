import fs from 'fs';

const file = fs.readFileSync('./football.csv', {
    encoding: 'utf-8',
})
.split('\n')
.map((item: string): string[] => item.split(','));

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let manUnitedWins = 0;

file.forEach((item:string[], index:number)=>{
    let teamWinHome = item.indexOf('Man United') === 1 && item.indexOf(MatchResult.HomeWin) === 5;
    let teamWinAway = item.indexOf('Man United') === 2 && item.indexOf(MatchResult.AwayWin) === 5;
    if(teamWinHome || teamWinAway) manUnitedWins++;
});

console.log(`Man United wins: ${manUnitedWins} times.`);