function isEven (x){
    if ((x === 0 || (x % 2 === 0)) && (x >= 0)){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));