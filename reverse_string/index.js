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
    // USING DECREMENTING FOR LOOP
    function reverseString(str) {
        
        let newStr = "";
        for(let i = str.length - 1 ; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    
    console.log(reverseString("Greetings from Earth"))
}

{
    // REVERSRE ONLY SECOND WORD
    
    function reverseString(str) {
        
        let newArr = str.split(" ");
        
        let splitSecStr = newArr[1].split("");
        
        let reverseSecStr = splitSecStr.reverse();
        
        newArr[1] = reverseSecStr.join("");
        
        return newArr.join(" ");
    }
    
    console.log(reverseString("Hey there"));
}