#  List

List are especially useful if we don't have to perform searches on the items in the list or put them into some type of sorted order.

Linking can be done in two ways – using dynamic allocation and using array index linking.

Linked data structures include linked lists, search trees, expression trees, and many other widely used data structures. They are also key building blocks for many efficient algorithms, such as topological sort and set union-find.

#Linked-lists

A linked list is a collection of structures ordered not by their physical placement in memory but by logical links that are stored as part of the data in the structure itself. It is not necessary that it should be stored in the adjacent memory locations. Every structure has a data field and an address field. The Address field contains the address of its successor.

Linked list can be singly, doubly or multiply linked and can either be linear or circular.

Basic properties
<<<<<<< HEAD
-objects, called nodes, are linked in a linear sequence.
- reference to the first node of the list is always kept. This is called the 'head' or 'front'.[3]
=======
-Objects, called nodes, are linked in a linear sequence.
A- reference to the first node of the list is always kept. This is called the 'head' or 'front'.
>>>>>>> 24a6fd9452f0a92d12fd64ec8e37faf1ed731d48

Some advantages to using iterators over using array indexing include: 
• Not having to worry about the underlying data storage structure when accessing list elements 
• Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list 
• Providing a uniform means of accessing elements for different types of data stores used in the implemenation of a  List  class
