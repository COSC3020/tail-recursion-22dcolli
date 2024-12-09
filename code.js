//recursive fib from class recursion slide 10
function fact(n){
  if(n==0)
    return 1;
  else
    return n * fact(n-1);
}
