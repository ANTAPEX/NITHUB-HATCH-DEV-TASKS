/** Logical Order In If Else Statements
 * When you are using Else if statements Order is very important 
 * Lets look at this example here ;
 */

function orderMyLogic(val){
    if (val < 5){
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 5";
    }
}

// Change the value to test
console.log(orderMyLogic(7));


/** Chaining If Else Statements
 * You can also chain If and Else If Statements 
 * So we are going to do a small challenge here 
 * Write Chained if/else if statements to fulfil the following conditions;
 * 
 * num < 5 - return "Tiny";
 * num < 10 - return "Small";
 * num < 15 - return "Medium";
 * num < 20 - return "Large";
 * num >= 20 - return "Huge"; 
 */

function testSize(num){
    // Only change code below this line
    if (num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    }else if (num < 20){
        return "Large";
    } else {
        return "Huge";
    }

    return "Change Me";
}
// You can change the value here to test 
console.log(testSize(7));