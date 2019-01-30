/*
Challenge
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
Sample Test Cases
Input:"hello world"

Output:"Hello World"


Input:"i ran there"

Output:"I Ran There"
*/

{
    let sample1 = "hello world";
    let sample2 = "i ran there";

    function LetterCapitalize(str){

        let words = str.split(" ");

        for( let i = 0; i < words.length; i++){
            words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    console.log(LetterCapitalize(sample1));
    console.log(LetterCapitalize(sample2));
}
