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

First due to how I check for sortedness before anything else, the best case would be an already sorted array which would have a complexity of $\Omega(n)$ because it will just run through the sorted functions for loop once and be done.

However for the worst case I believe that it should be $O(nn!)$ because it needs to run through the array while checking each permutation and the n! comes from the fact that we need to check each possible permutation which gets larger and larger in factorial time as the array increases in size and then  since the sorted function runs another full length for loop, so $O(nn! + n) \in O(nn!)$.

I feel that if permutations were generated randomly it could be much shorter or infinitely longer because you could generate the correct permuation the first time or you could never find it.



I tried looking up the best practices for how to declare global variables and got conflicting information so I just went with my best feeling, I don't have any links but figured I should mention it.

I also ran my complexity by Ali before requesting review because I don't trust myself.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
