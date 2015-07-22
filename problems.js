// 1. Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. 
var str = '88Hello 3World!';
var str2 = '55Hello';
var str3 = '5Hello 5'

var addNumbers = function(string){
    var splitStr = string.split(' ');
    var numArray = [];
    
    // for each item in splitStr, seperate each character and check the asci using charCodeAt()
    // Numbers are between 48 and 57
    splitStr.forEach(function(str) {
        var chars = str.split('');
        var numberStr = '';
        
        chars.forEach(function(char) {
            if(char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                numberStr += char;
            }
        });
        
        numArray.push(parseInt(numberStr, 10));
    });
    
    return numArray.reduce(function(prev, curr){
        return prev + curr;
    });
}
// 2. Write a function longestWord that takes a single string parameter and returns the largest word in the string.

// 3. Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns that final number divided by the total amount of letters in the string.