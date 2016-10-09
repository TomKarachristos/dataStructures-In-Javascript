function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

const movies = createArr(films.txt).split("\n");

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}

function displayList(list) {
	for (list.front(); list.currPos() < list.length(); list.next()) {
		print(list.getElement());
	}
}