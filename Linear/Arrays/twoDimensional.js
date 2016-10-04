var row = 10;
var col = [];
for(i=0; i < row; ++i){
  col[i] = [];
}

Array.matrix = function(num_rows, num_cols, initial){
  var arr= [];
  for(var i=0; i < num_rows;++i){
    var columns = [];
    for(var j =0; j < num_cols;++j){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
};

var nums = Array.matrix(5,5,0);
print(nums[1][1]);
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
print(names[1][2]);

var grades = [[89,77,78],[32,32,32]];
print(grades[1][2]);