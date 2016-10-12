/*
  listSize: (property) Number of elements in list
  pos: (property) Current position in list
  length:(property) Returns the number of elements in list
  clear: (function) Clears all elements from list
  getElement: (function) Returns element at current position
  insert: (function) Inserts new element after existing element
  append: (function) Adds new element to end of list
  remove: (function) Removes element from list
  front: (function) Sets current position to first element of list
  end: (function) Sets current position to last element of list
  prev: (function) Moves current position back one element
  next: (function) Moves current position forward one element
  currPos: (function) Returns the current position in list
  moveTo: (function) Moves the current position to specified position
*/

function List(){
  this.listSize = 0;
  this.dataStore = [];
  // O(1)
  this.clear = function clear() {
    };
  // O(N)
  this.find = function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  };
  // O(N)
  this.insert = function(element, after){
    var insertPos = this.find(after);
    if(~insertPos){
      this.dataStore.splce(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  };
  // O(1)
  this.append = function(element){
    this.dataStore[this.listSize++] = element;
  };
  // O(N)
  this.remove = function remove(element) {
    var foundAt = this.find(element);
    if (~foundAt) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
    }
    return false;
  };
  this.length = function length(){
    return this.listSize;
  };
  // O(1)
  this.getElement = function () {
   return this.dataStore[this.pos];
  };
  // O(1)
  this.length = function length() {
    return this.listSize;
  };
  // O(N)
  this.contains = function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  };
  this.pos = 0;

  function front() {
    this.pos = 0;
  }

  function end() { 
    this.pos = this.listSize - 1;
  }

  // O(1)
  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  // O(1)
  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  function currPos() {
    return this.pos;
  }

  function moveTo(position) {
    this.pos = position;
  }
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
// Cynthia,Raymond,Barbara
console.log(names.dataStore);
names.remove("Raymond");
console.log(names.dataStore);

// Cynthia,Barbara
names.append("Jennifer");
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.next();
names.next();
names.prev();
console.log(names.getElement());

