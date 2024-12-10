//function from fib invarients as a reference
/*
function fib(n) {
  let arr = [0,1]

  if (n==0){
      return[0];
  }
  else if(n==1){
      return arr;
  }
  else{
      for(let i=2;i<=n;i++){
            arr.push(arr[i-1]+arr[i-2])
          }
  }
  return arr;
}

*/
function tailFib(n,arr=[0,1]){
  

  if(n==0){
    return[0]
  }
  if(n==1){
    //makes sure its just the first two numbers
    return arr.slice(0,2);
  }
  //goes until specified n
  if (arr.length > n){
    return arr;
  }

  //part of the recursion that summs the last two elements for the next
  arr.push( arr[arr.length - 1] + arr[arr.length - 2]);
  //tail recursive call, I realize that I could probably include the previous line's work in the call itself, but for my own clarity and because I like the simple tail call they are separate
  return tailFib(n,arr);

}
//console.log(fib(3))
//console.log(tailFib(3))
