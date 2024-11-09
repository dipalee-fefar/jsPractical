var path = require("path");

//path normalize
var x = path.normalize("user/dipalee/lab1/pathDemo.js");
console.log(x);

//join example
var y = path.join('user','dipalee/lab1','/pathDemo.js');
console.log(y);

//resolve example
var z = path.join('css/','html',);
console.log(z);

//relative example
var rel = path.relative('/user/dipalee','/user/docs/example.txt');
console.log(rel);

//dirname example
var dir = path.dirname('/user/bscit/lab2/example.js');
console.log(dir);