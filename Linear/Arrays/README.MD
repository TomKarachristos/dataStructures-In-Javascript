#  Arrays

An array data structure is a data structure consisting of a collection of elements each identified by at least one array index or key. 
An array is stored so that the position of each element can be computed from its index tuple by a mathematical formula.


Arrays are used to implement mathematical vectors and matrices, as well as other kinds of rectangular tables. Many databases, small and large, consist of (or include) one-dimensional arrays whose elements are records.

Arrays are used also to implement other data structures, such as heaps, hash tables, deques, queues, stacks, strings, and VLists.


# Dynamic Arrays

A dynamic array, growable array, resizable array, dynamic table, mutable array, or array list is a random access, variable-size list data structure that allows elements to be added or removed

Consider a dynamic array that grows in size as more elements are added to it such as an ArrayList in Java. If we started out with a dynamic array of size 4, it would take constant time to push four elements onto it. Yet pushing a fifth element onto that array would take longer as the array would have to create a new array of double the current size (8), copy the old elements onto the new array, and then add the new element. The next four push operations would similarly take constant time, and then the subsequent addition would require another slow doubling of the array size.

|               | INDEXING | INSERT/DELETE START | INSERT/DELETE MIDDLE | INSERT/DELETE END | WASTED SPACE |   |
|---------------|----------|---------------------|----------------------|-------------------|--------------|---|
| ARRAY         | Θ(1)     | NO                  | NO                   | NO                | 0            |   |
| DYNAMIC ARRAY | Θ(1)     | Θ(N)                | Θ(N)                 | Θ(1)              | Θ(N)         |   |
| Linked list   | Θ(N)     | Θ(1)                | Θ(N)                 | Θ(1)              | Θ(N)         |   |


Arrays can be used to determine partial or complete control flow in programs, as a compact alternative to (otherwise repetitive) multiple IF statements. They are known in this context as control tables(or dispatch table) and are used in conjunction with a purpose built interpreter whose control flow is altered according to values contained in the array. The array may contain subroutine pointers (or relative subroutine numbers that can be acted upon by SWITCH statements) that direct the path of the execution. Something like polymorphism.

Arrays have O(1) random access, but are really expensive to add stuff onto or remove stuff from.

Linked lists are really cheap to add or remove items anywhere and to iterate, but random access is O(n).

A lookup table is an array that replaces runtime computation with a simpler array indexing operation. 
The savings in terms of processing time can be significant, since retrieving a value from memory is often faster than undergoing 
an "expensive" computation or input/output operation.

