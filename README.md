# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

----------------------------------------------------------------------

I believe that I should have two different complexities for the best and worst case.

First due to how I check for sortedness before anything else, the best case should be $\Omega(n)$ because it will just run through the sorted function for loop once and be done.

However for the worst case I believe that it should be $O(nn!)$ because it needs to run through the array to check if it's sorted each permutation and the n! comes from the fact that we need to check each possible permutation which gets larger and larger in factorial time as the array increases in size.

I feel that if permutations were generated randomly it could be much shorter or infinitely longer because you could generate the correct permuation the first time or you could never find it.
