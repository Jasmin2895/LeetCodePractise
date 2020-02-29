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


