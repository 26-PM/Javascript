function factorial(a){
    if (a>=2){
        return a*factorial(a-1)
    }
    else{
        return 1;
    }
}
let a=parseInt(prompt("Enter a number to find factorial:"))
console.log(factorial(a))