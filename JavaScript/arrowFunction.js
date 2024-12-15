const user = {
    username: "sudip",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, Welcome!!`);
        
    }
}

// user.welcomeMsg()
// user.username = "Merlin"
// user.welcomeMsg()

const user2 = {
    username: "sudip",
    price: 999,

    welcomeMsg: function(){
        console.log(`${user2.username}, Welcome!!`);
        
    }
}

// user2.welcomeMsg()
// user2.username = "Bob"
// user2.welcomeMsg()

function trial()
{
    let username="sudip2311"
    console.log(this.username); // function er bhittor e this keyword use koraa jaina shudu object e use kora jabe
    
}

// trial()


// +++++++++++++++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++

const arrowFunc_0 = function ()
    {
        let username="B0B"
        console.log(username); 
    }
    
// arrowFunc_0()

const arrowFunc = () => /*arrow function e shudu function keyword ta remove kore deye => symbol use kora hoi*/
{
    let username="sudip2311"
    console.log(username); 
}

// arrowFunc()


// +++++++++++++++++++++++++++++++++++++++ Implicit Return +++++++++++++++++++++++++++++

const addTwo = (num1, num2) =>
{
    return num1+num2 //explicitly use the return keyword
}

// console.log(addTwo(3,4));


// +++++++++++++++++++++++++++++++++++++++ Explicit Return +++++++++++++++++++++++++++++

const addThree = (num1, num2, num3) =>
(
     num1+num2+num3 //no need of return keyword
)
    
// console.log(addThree(3,4,8));



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const objFunc = () =>
({
    username:"AgentMerlin"
})

// console.log(objFunc());
