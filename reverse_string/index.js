/*
Algorithm Challenge
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Provided test cases
reverseString(“hello”) should become “olleh”
reverseString(“Howdy”) should become “ydwoH”
reverseString(“Greetings from Earth”) should return”htraE morf sgniteerG”
*/

{
    // FIRST METHOD WITH BUILD IN FUNCTIONS
    function reverseString(str) {
        
        let slicedArr = str.split("");
        let reversedArr = slicedArr.reverse();
        let joinedArr = reversedArr.join("");
        return joinedArr;
        
    }
    
    console.log(reverseString("hello"));
}

{
    // SAME METHOD BUT IN ONE LINE
    function reverseString(str) {
        
        return str.split("").reverse().join("");
    }
    
    console.log(reverseString("Howdy"))
}

{
    
}