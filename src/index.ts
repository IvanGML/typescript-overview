import { CsvFileReader } from './FileReader/CsvFileReader';
import { MatchReader } from './FileReader/MatchReader';
import { Summary } from './FileReader/Summary';
import { WinsAnalises } from './FileReader/analizers/WinsAnalizer';
import { ConsoleOutput } from './FileReader/printers/ConsoleOutput';
import { HTMLOutput } from './FileReader/printers/HTMLOutput';

const readFile = new CsvFileReader('football.csv');
const footbalData = new MatchReader(readFile);

const analizeManUnited = new Summary(
    new WinsAnalises('Huddersfield'),
    new HTMLOutput()
);
analizeManUnited.buildAndPrintReport(footbalData.matches);


