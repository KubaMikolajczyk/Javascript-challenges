/*

ChallengesLearn ⌄ProfileMembershipOrganizations

Tags: string manipulation, regular expression | Difficulty: Easy
Challenge
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
Sample Test Cases
Input:"+d+=3=+s+"

Output:"true"


Input:"f++d+"

Output:"false"

*/

{
    let sample1 = "+d+=3=+s+"
    let sample2 = "f++d+"
    
    
    function SimpleSymbols(str) {
        
        // adding padding to letters at beggining and end to avoid exception error
        str = '=' + str + '=';
        
        for( let i = 0; i < str.length; i++) {
            
            if(str[i].match(/[a-z]/i) !== null){
                
                if(str[i-1] != '+' || str[i+1] != '+'){
                    
                    return false;
                }
                 
            }
        }
        
        return true;
    }
    
    console.log(SimpleSymbols(sample1));
    console.log(SimpleSymbols(sample2));
}