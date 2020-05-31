const [x,y,,z] = [1,2,3,4,5];
console.log(x,y,z);

let a = 8, b = 6;
(()=> {
    "use strict";
    [a,b] = [b,a];
})();

console.log(a,b);