//function from fib invarients as a reference
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
