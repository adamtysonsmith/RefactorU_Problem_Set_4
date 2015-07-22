// 1. Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. 
var str = '88Hello 3World!'; // ==> 91
var str2 = '55Hello'; // ==> 55
var str3 = '5Hello 5' // ==> 10

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
var sentence = 'Some really pointless sentence about things.'
var cupcake = 'Marshmallow chocolate jelly pudding caramels tart cake gummies.'

var longestWord = function(string) {
    var splitStr = string.split(' ');
    var longest;
    
    splitStr.reduce(function(prev, curr, index){
        // first time around, check prev and curr
        // next time around, always check curr vs. longest
        if(index === 1) {
            longest = prev.length > curr.length ? prev : curr;
            return curr;
        } else {
            longest = longest.length > curr.length ? longest : curr;
            return curr;
        }
    });
    
    console.log(longest);
}


// 3. Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns that final number divided by the total amount of letters in the string.