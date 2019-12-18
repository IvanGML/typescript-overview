"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var file = fs_1.default.readFileSync('./football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map(function (item) { return item.split(','); });
var manUnitedWins = 0;
file.forEach(function (item, index) {
    var teamWinHome = item.indexOf('Man United') === 1 && item.indexOf('H') === 5;
    var teamWinAway = item.indexOf('Man United') === 2 && item.indexOf('A') === 5;
    if (teamWinHome || teamWinAway)
        manUnitedWins++;
});
console.log("Man United wins: " + manUnitedWins + " times.");
