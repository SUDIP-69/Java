// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sudip",
    "full name": "Sudip Chanda",
    [mySym]: "mykey1",
    [Symbol("key2")]: "mykey2",
    age: 18,
    location: "Jaipur",
    email: "Sudip@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Sudip@chatgpt.com"
// Object.freeze(JsUser) // object freeze/lock kore dai
JsUser.email = "Sudip@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //  `` use kora k bole string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// const tinderUser = new Object() //singelton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Merlin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "csudip@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sudip",
            lastname: "chanda"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} //spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "OOP in Python",
    price: "999",
    courseInstructor: "sudip"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "sudip",
//     "coursename": "OOP in Python",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
