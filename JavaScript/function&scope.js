const arr =[100,444,24,112]

function secondNumber(a)
{
    return a[1]
}

// console.log(secondNumber(arr))

const user ={
    username: "sudip2311",
    password: "Sudip@2311",
}

function display(obj)
{
    console.log(`The username of the user is ${obj.username}`)
}

// display(user)

function cartPrice(val1,val2,...val3) // here ... acts as rest operator
{
    return val3
}

// console.log(cartPrice(1,2,3,4,5));

var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    c = 90 //the value of 'c' is getting updated
    
}



console.log(a);
// console.log(b);
console.log(c);
