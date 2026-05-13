function factorial(x) {
    if (x === 0) {
        return false;
    }
    else {
        x -= 1;
        for (let i = 0; i < x; i++) {
            factorial(x);    
        }
        return x;
    }
}