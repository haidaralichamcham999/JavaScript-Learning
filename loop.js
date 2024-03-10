function fibo(n) {
    var f0 = 0, f1 = 1, c;
    for (var i = 1; i < n; i++) {
        c = f0 + f1;
        f0 = f1;
        f1 = c;
    }
    return c;
}

console.log("fibo of 10 --->", fibo(10))

function factorial(n) {
    var fact = 1;
    for (var i = 1; i < n; i++) {
        fact *= n
    }
    return fact;
}

console.log("factorial of 5 --->", factorial(5))

function countRepeat(ar) {
    let count = {};
    for (var i of ar) {
        if(count[i]){
            count[i] +=1;
        }else{
            count[i] =1;
        }
    }
    return count;
}
console.log('Counted repeat of array --->',countRepeat([1,1,2,3,5,2,5]))

function palindrome(str){
    let len =str.length;
    for( var i=0;i<len/2; i++){
        if(str[i] !== str[len -1-i]){
            return false
        }
    }
    return true;
}
console.log('Check palindrom madam --->', palindrome('madam'))
console.log('Check palindrom madams --->', palindrome('madams'))

function quickSort(ar){
    if(ar.length ===0) return[];
    else{
        let lesser =[], greater=[], equal=[], pivotVal=ar[0];
        for(var e of ar){
            if(pivotVal >e){
                lesser.push(e)
            }else if(pivotVal < e){
                greater.push(e);
            }else{
                equal.push(e)
            }
        }

        return [...quickSort(lesser), ...equal, ...quickSort(greater)]
    }
}

console.log('Quick sorting array [10,3,5,2,6,7,4,8] --->', quickSort([10,3,5,2,6,7,4,8]))