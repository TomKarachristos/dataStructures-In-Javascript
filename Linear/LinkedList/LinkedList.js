function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = function(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  };
  this.insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  };
  this.remove = function(item) {
    var prevNode = this.findPrevious(item);
    if ((prevNode.next !== null)) {
      prevNode.next = prevNode.next.next;
    }
  };
  this.display = function display() {
    var currNode = this.head;
    while (currNode.next !== null) {
      print(currNode.next.element);
      currNode = currNode.next;
    }
  };
  this.findPrevious = function(item) {
    var currNode = this.head;
    while ((currNode.next !== null) &&
      (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
  };
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();

console.log();
cities.remove("Carlisle");
cities.display();