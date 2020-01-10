import { Sorter } from '../Sorter';

class Node {
    next: Node | null = null;

    constructor(public value: number) {};
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }

    get length(): number {
        if(!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while(node.next) {
            length++;
            node = node.next;
        }
        return length;
    }

    at(index: number): Node {
        if(!this.head) {
            throw new Error ('List is empty.');
        }
        let elementIndex = 0;
        let element: Node | null = this.head;
        while(element) {
            if(elementIndex === index) {
                return element;
            }
            elementIndex++;
            element = element.next;
        }
        throw new Error ('Index is too big.');
    }

    compare(index: number): boolean {
        if(this.at(index) && this.at(index + 1)) {
            return this.at(index).value > this.at(index + 1).value;
        }
        return false;
    }

    swap(index: number): void {
        if(this.at(index) && this.at(index + 1)) {
            let temp = 0;
            temp = this.at(index).value;
            this.at(index).value = this.at(index + 1).value;
            this.at(index + 1).value = temp;
        }
    }

    print(): void {
        if(!this.head) {
            return;
        }
        let node: Node | null = this.head;
        while(node) {
            console.log(node.value);
            node = node.next;
        }
    }
}