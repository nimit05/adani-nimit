let a = [1, 2, 3, 4,5];
let b = [9, 8, 7];

function helper(a, b) {
    
let i = 0;
let j = b.length - 1;

let ans = [];

    while (i < a.length && j >= 0) {
        if (a[i] > b[j]) {
            ans.push(b[j]);
            j--;
        } else {
            ans.push(a[i]);
            i++;
        }
    }

    while (i < a.length) {
        ans.push(a[i]);
        i++;
    }

    while (j >= 0) {
        ans.push(b[j]);
        j--;
    }

    let n = ans.length;


    if (n % 2 == 0) {
        let c = (ans[n / 2 - 1] + ans[n / 2]) / 2;
        return c;
    } else {
       return ans[(n - 1 )/ 2];
    }
}

let ab = helper(a, b);

console.log(ab);