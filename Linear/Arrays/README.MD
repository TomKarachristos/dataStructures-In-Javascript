#  Arrays

An array data structure is a data structure consisting of a collection of elements each identified by at least one array index or key. 
An array is stored so that the position of each element can be computed from its index tuple by a mathematical formula.


|               | INDEXING | INSERT/DELETE START | INSERT/DELETE MIDDLE | INSERT/DELETE END | WASTED SPACE |   |
|---------------|----------|---------------------|----------------------|-------------------|--------------|---|
| ARRAY         | Θ(1)     | NO                  | NO                   | NO                | 0            |   |
| DYNAMIC ARRAY | Θ(1)     | Θ(N)                | Θ(N)                 | Θ(1)              | Θ(N)         |   |
A lookup table is an array that replaces runtime computation with a simpler array indexing operation. 
The savings in terms of processing time can be significant, since retrieving a value from memory is often faster than undergoing 
an "expensive" computation or input/output operation.