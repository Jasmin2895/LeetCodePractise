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