# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note

I did not complete this excersise last semester, so I am attempting this completely from scratch. I modified my recursive function from the excercise fibbonacci invarients, on that same note, the test is the same from that repo as it is a dependable test. For the analysis, I looked at what is the standard fibonacci implemenation which I got from here.(https://www.geeksforgeeks.org/javascript-program-to-display-fibonacci-sequence-using-recursion/).

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

### Answer:

I believe that the complexities of the two different versions are different. Looking at the standard non-tail-recursive version below 

```javascript
function fibonacci(n) {
    if (n &lt;= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```


