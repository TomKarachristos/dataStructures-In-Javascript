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