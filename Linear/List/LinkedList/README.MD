# Linked list

The linked list can be used in almost every situation where a one-dimensional array is used,
except when you need random access to the elements of a list. When random access is
required, an array is the better data structure to use.

A linked list is a collection of objects called nodes. Each node is linked to a successor
node in the list using an object reference. The reference to another node is called a link.
While array elements are referenced by their position, linked list elements are referenced
by their relationship to the other elements of the linked list. 
). Something else to notice in the figure is that we mark the end of a linked
list by pointing to a null node.
Marking the beginning of a linked list can be a problem. Many linked-list implemen‐
tations include a special node, called the head, to denote the beginning of a linked list.

A linked list is a collection of structures ordered not by their physical placement in memory but by logical links that are stored as part of the data in the structure itself. It is not necessary that it should be stored in the adjacent memory locations. Every structure has a data field and an address field. The Address field contains the address of its successor.

Linked list can be singly, doubly or multiply linked and can either be linear or circular.

The underlying data storage mechanism we use for lists is the array

Basic properties
-objects, called nodes, are linked in a linear sequence.
- reference to the first node of the list is always kept. This is called the 'head' or 'front'.[3]
-Objects, called nodes, are linked in a linear sequence.
A- reference to the first node of the list is always kept. This is called the 'head' or 'front'.

Some advantages to using iterators over using array indexing include: 
• Not having to worry about the underlying data storage structure when accessing list elements 
• Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list 
• Providing a uniform means of accessing elements for different types of data stores used in the implemenation of a  List  class
