function missingNum(a, n) {

    let total = Math.floor( (n + 1) * (n + 2) / 2);
    for (let i = 0; i< n; i++)
        total -= a[i];
    return total;
}
let arr = [ 1, 2, 4, 5, 6];
let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10] ;
let arr = [7, 2, 3, 6, 5, 9, 1, 4, 8] ;
let arr = [7, 2, 3, 9, 4, 5, 6, 8, 10] ;
let arr = [10, 5, 1, 2, 4, 6, 8, 3, 9] ;
let n = arr.lengrh;
let miss = missingNum(arr, n);
document.write(missingNum(miss));




function MissingNo(a) 
{ 
    let n = a.length;
    let i, total=1; 
     
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total; 
} 

let arr = [1, 2, 3, 5];
document.write(MissingNo(arr));
