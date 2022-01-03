// object and props
let object = {
	greet : "Hello"
}
console.log(object['greet']);
let prop = "greet";
console.log(object[prop]);
let arr = [];
arr.push(function(){
   console.log("Hello world")
});
arr.push( function(){
   console.log("Hello world")
});
console.log(arr);
arr.forEach( fn => {
 fn();
} )
