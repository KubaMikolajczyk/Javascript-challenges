//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
//Sample Test Cases
//Input:"hello*3"
//
//Output:"Ifmmp*3"
//
//
//Input:"fun times!"
//
//Output:"gvO Ujnft!"

{
    let sample1 = "hello*3"
    let sample2 = "fun times!"

    function LetterChanges(str){

        let conversion = str.replace(/[a-z]/gi, function(char) {
            return ('z' === char || 'Z' === char) ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
        })

        let resize = conversion.replace(/a|e|o|u|i/gi, function(vowel) {
            return vowel.toUpperCase();
        })

        return resize;
    }

    console.log(LetterChanges(sample1));
    console.log(LetterChanges(sample2));
}

