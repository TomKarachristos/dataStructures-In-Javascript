# Stacks

Stacks are efficient data structures because data can be added or removed only from the
top of a stack, making these procedures fast and easy to implement. 

The two primary operations of a stack are adding elements to a stack and taking elements
off a stack. Elements are added to a stack using the push operation. Elements are taken
off a stack using the pop operation

Stack is not only used to perform recursion but any bunch of nested function calls. Recursion is a special case wherein all the nested function calls are to the same function, or the same function is called in a cyclic chain of function calls. 

Coming to the question, why stack for recursion/ function calling? This is because the nature of nested function calling and returning is the same as that of a stack. The one that is called at top level(or the earliest) is returned the last. The later a function is called in the nested hierarchy, the earliest it returns. So, the start/ return of a function call turns out analogous to push/ pop operations of a stack and thus a stack can be used to mimic this functionality.
