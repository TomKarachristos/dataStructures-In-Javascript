# Linear Data Structures

Stacks, queues, deques, and lists are examples of data collections whose items are ordered depending on how they are added or removed. 
Once an item is added, it stays in that position relative to the other elements that came before and came after it.
Collections such as these are often referred to as linear data structures.



143
down vote
accepted
Linked lists are preferable over arrays when:

a) you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is absolutely critical)
b) you don't know how many items will be in the list. With arrays, you may need to re-declare and copy memory if the array grows too big
c) you don't need random access to any elements

d) you want to be able to insert items in the middle of the list (such as a priority queue)

Arrays are preferable when:

a) you need indexed/random access to elements
b) you know the number of elements in the array ahead of time so that you can allocate the correct amount of memory for the array
c) you need speed when iterating through all the elements in sequence. You can use pointer math on the array to access each element, whereas you need to lookup the node based on the pointer for each element in linked list, which may result in page faults which may result in performance hits.
d) memory is a concern. Filled arrays take up less memory than linked lists. Each element in the array is just the data. Each linked list node requires the data as well as one (or more) pointers to the other elements in the linked list.

from: http://stackoverflow.com/questions/393556/when-to-use-a-linked-list-over-an-array-array-list
