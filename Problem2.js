//Each new term in the Fibonacci sequence is generated by adding the previous two terms.
//By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed n,
//find the sum of the even-valued terms.

function fiboEvenSum(n) {
    // You can do it!
    var a = 0;
    var b = 1;
    var temp = 0;
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
        if (temp % 2 === 0 && temp <= n) {
            sum += temp;
        }
    }

    return sum;
}

// console.log(fiboEvenSum(8));
// console.log(fiboEvenSum(10));
console.log(fiboEvenSum(34));
