/*
The Algorithm Challenge Description
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Provided test cases
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/

{
    //REPEAT WITH WHILE LOOP
    
    function repeatStringNumTimes(str, times) {
        
        let repeatedString = "";
        
        while(times > 0) {
            repeatedString += str;
            times--;
        }
        
        return repeatedString;
    }
    
    console.log(repeatStringNumTimes("abc", 3));
    
}

{
    //USING ES6 REPEAT
    
    function repeatStringNumTimes(str, times) {
        
        if (times > 0) {
            return str.repeat(times);
        }
        return "";
    }
    
    console.log(repeatStringNumTimes('lol', 3));
    console.log(repeatStringNumTimes('lol', -1));
}