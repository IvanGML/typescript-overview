import fs from 'fs';

const file = fs.readFileSync('./football.csv', {
    encoding: 'utf-8',
})
.split('\n')
.map((item: string): string[] => item.split(','));

let manUnitedWins = 0;

file.forEach((item:string[], index:number)=>{
    let teamWinHome = item.indexOf('Man United') === 1 && item.indexOf('H') === 5;
    let teamWinAway = item.indexOf('Man United') === 2 && item.indexOf('A') === 5
    if(teamWinHome || teamWinAway) manUnitedWins++;
});

console.log(`Man United wins: ${manUnitedWins} times.`);