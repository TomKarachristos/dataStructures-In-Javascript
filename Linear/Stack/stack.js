function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = function(element) {
 		this.dataStore[this.top++] = element;
	};
	this.pop = function() {
 		return this.dataStore[--this.top];
	};
	// If you call the peek() function on an empty stack, you get undefined as the result.
	this.peek = function() {
 		return this.dataStore[this.top-1];
	};
	this.clear = function() {
 		this.top = 0;
	}
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());