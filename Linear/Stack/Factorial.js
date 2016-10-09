function factorial(n) {
 	return n === 0 ? 1 : n * factorial(n-1);
}

function fact(n) {
 	var s = new Stack();
 	while (n > 1) {
 		s.push(n--);
 	}
 	var product = 1;
 	while (s.length() > 0) {
 		product *= s.pop();
 	}
	return product;
}

print(factorial(5)); // displays 120
print(fact(5)); // displays 120