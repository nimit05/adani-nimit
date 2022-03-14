let portfolio = [
    {name: 'Mark', stock: 'FB'},
    {name: 'Steve', stock: 'AAPL'},
    {name: 'Tim', stock: 'AAPL'},
    {name: 'Steve', stock: 'MSFT'},
    {name: 'Bill', stock: 'MSFT'},
    {name: 'Bill', stock: 'AAPL'},
];
    
function helper(arr) {
    let ans = [];
    
    arr.map((obj) => {
        let temp = ans.find((ele) => {
            return ele.stock && ele.stock === obj.stock
        })

        if (temp === undefined) {
            let n = [];
                n.push(obj.name);
                ans.push({
                    stock: obj.stock,
                    name: n,
                    count: 1
                })
        } else {
            temp['name'].push(obj.name);
            temp['count'] += 1;
        }
    })
    
    ans.sort((a, b) => {
        return b.count - a.count;
    } )

    return ans;
}

let ab = helper(portfolio);
console.log(ab);