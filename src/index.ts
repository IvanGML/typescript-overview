import { NumbersCollection } from './collections/NumbersCollection';
import { CharactersCollection } from './collections/CharactersCollection';
import { LinkedList } from './collections/LinkedList';

const numbersCollection = new NumbersCollection([30, -3, 2, 10, -10]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(3);
linkedList.add(2);
linkedList.add(0);
linkedList.sort();


console.log(charactersCollection.data);
console.log(numbersCollection.data);
linkedList.print();
