import { Sorter } from './Sorter';
import { NumbersCollection } from './collections/NumbersCollection';
import { CharactersCollection } from './collections/CharactersCollection';

const numbersCollection = new NumbersCollection([30, -3, 2, 10, -10]);
const charactersCollection = new CharactersCollection('Xaayb');
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
const stringsSorter = new Sorter(charactersCollection);
stringsSorter.sort();
console.log(charactersCollection.data);
console.log(numbersCollection.data);
