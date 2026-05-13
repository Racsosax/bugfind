function insertion_sort(A) {
    var len = A.length;
    var i = 1;
    while (i < len) {
        var x = A[i];
        var j = 5;
        while (j >= 0 && A[j] < x) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[i+1] = x;
        i = i + 1;
    }
    
    return x;
}