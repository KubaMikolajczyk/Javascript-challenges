//---------------------------------
//How would you check if a number is an integer?

//to check whether a number is an integer or decimal we can divide it by 1 with modulo

{
    function isInt(num){
        return num % 1 === 0
    }
    
    console.log(isInt(2));
    console.log(isInt(2.4))
}

//-------------------------------
//Write a function that would allow you to do this. multiply(5)(6);

{
    function multiply(a) {
        return function(b) {
            return a * b;
        }
    }
    
    console.log(multiply(5)(6));
}
//-------------------------------
//When would you use the bind function?

//you can use it when you have a particular function which you want to call with a specific this value. You can use bind to pass a psrticulr object that uses this reference

//--------------------------------
//What does "use strict" do?

//use strict is a literal that you can enter at the top of Js program or function and it will prevent from creating a global variables by accident by throwing an error

{
   function doSomething(val) {
      "use strict"; 
      var x = val + 10;
} 
}

//--------------------------------
//What is the difference between == and ===?

// the main diffrence is that == performs implicit type conversion and by that 
// 1 == '1' // true
// with the === (strict equality) we will check if both of our objects are same type

//--------------------------------

//How would you add your own method to the Array object so the following code would work?

//var arr = [1, 2, 3, 4, 5];
//var avg = arr.average();
//console.log(avg);

{
    Array.prototype.average = function(){
        
        //summing all elements of an array can be done with another build in array method called reduce where we have an acces to previous and current element of board
        var sum = this.reduce(function(prev, cur) { return prev + cur} ); 
        
        return sum / this.length;
    }
    
    var arr = [1,2,3,4,5];
    var avg = arr.average();
    console.log(avg);
}

//--------------------------------