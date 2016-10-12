# Heap

 A heap is a specialized tree-based data structure that satisfies the heap property:
 If A is a parent node of B then the key (the value) of node A is ordered with respect to the key of node B with the
 same ordering applying across the heap. A heap can be classified further as either a "max heap" or a "min heap".
 In a max heap, the keys of parent nodes are always greater than or equal to those of the children and the highest key is in the root node.
 In a min heap, the keys of parent nodes are less than or equal to those of the children and the lowest key is in the root node. 
 
 Heaps are crucial in several efficient graph algorithms such as Dijkstra's algorithm, and in the sorting algorithm heapsort.
 A common implementation of a heap is the binary heap, in which the tree is a complete binary tree 