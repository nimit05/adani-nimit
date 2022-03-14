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
    let map = {};
    arr.map((obj) => {
       
        if (obj.stock in map) {
            let temp = ans.find((el) => {
                return el.stock && el.stock === obj.stock
            })

            temp['name'].push(obj.name);
            temp['count'] += 1;

        } else {
            let n = [];
                n.push(obj.name);
                ans.push({
                    stock: obj.stock,
                    name: n,
                    count: 1
                })
            map[obj.stock] = 1;
        }
    })
    
    ans.sort((a, b) => {
        return b.count - a.count;
    } )

    return ans;
}

let ab = helper(portfolio);
console.log(ab);

