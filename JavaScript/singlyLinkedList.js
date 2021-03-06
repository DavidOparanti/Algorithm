/*----------------------------------------/
*Singly linked list 
*-----------------------------------------*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0;
        
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode 
            this.tail = newNode; 
        }
        this.length++
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let  currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    shift(){
        if(!this.head) return undefined;
        let head = this.head;
        let newHead = head.next;
        this.length--
        return head; 
    } 
}

var list = new SinglyLinkedList();
list.push('david');
list.push('Kike'); 