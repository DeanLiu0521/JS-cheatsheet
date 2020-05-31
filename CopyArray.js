const arr1 = ["JAN", "FEB", "MAR", "APR"];

let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = "DIFFERENT";
})();

console.log(arr2);


