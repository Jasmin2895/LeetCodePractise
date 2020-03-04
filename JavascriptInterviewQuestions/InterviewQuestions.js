//This file contains basic javascript questions which are mostly asked in interview!

// out of the following questions 
var output = (function (x) {
    delete x;
    return x;
})(0);
// ans is 0

var x = { foo: 1 };
var output = (function () {

    delete x.foo;

    return x.foo;

})();
// ans is undefined

console.log(true + 0);  // ans is 0

var test = function () {

    for (var i = 1; i < 5; i++) {

        setTimeout(() => console.log(i), 1000)  // 5 5 5 5

    }

}

//output will be 4 that will be printed 5 times

function foo1() {

    return {

        bar: "hello"

    };

}

// output will be {bar:hello}


function foo2() {

    return

    {

        bar: "hello"

    };

}
//output will be undefined

function func1({ a = 1 } = {}) {
    console.log("a", a);
}

//output of func1() = {a:1}
//output of func1({a:2}) = {a:2}

// difference between call and bind
const person = { name: "Jasmin" };

function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));
//output will be Jasmin is 24 and func


//memory reference of a variable 
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
/*
Whenever we declare a set a variable equal to an object, we're not actually giving that variable the value of that object. Instead, we're giving it the value of a reference (or actually pointer) to that object in memory!
*/

/*
Write a function f that returns Hello, world!.
Every line must have at most 2 characters, and the total number of lines must be less than 40.
*/

[ // With destructuring assignment, start declaring variables
    ,
    t
    ,
    ,
    r
    ,
    ,
    i
    ,
    ,
    m
    ,
    ,
    b
    ,
    ,
    i
    ,
    ,
    n
    ,
    ,
    d
    ,
    ,
    H
    ,
    ,
    e
    ,
    ,
    l
    ,
    ,
    l
    ,
    ,
    o
    ,
    ,
    c // Comma
    ,
    ,
    s
    ,
    ,
    w
    ,
    ,
    o
    ,
    ,
    r
    ,
    ,
    l
    ,
    ,
    d
    ,
    ,
    x // Exclamation mark
]
    =
    `
    t
    r
    i
    m
    b
    i
    n
    d
    H
    e
    l
    l
    o
    ,
     
    w
    o
    r
    l
    d
    !
    `
f // Start declaring our function
    =
    ( // This evaluates to "" or, the String object
        [
        ]
        +
        [
        ]
    )
    [ // `trim`
        t
        +
        r
        +
        i
        +
        m
    ]
    [ // `bind`
        b
        +
        i
        +
        n
        +
        d
    ]
        ( // Can use parentheses or template tag syntax to call `bind`
            H
            +
            e
            +
            l
            +
            l
            +
            o
            +
            c
            +
            s
            +
            w
            +
            o
            +
            r
            +
            l
            +
            d
            +
            x
        )