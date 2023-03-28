//console.log('hi');
// [SECTIONS] Operators
/*
    Arithmetic Operators
        - perform calculations
            - addition(+)
            - subtration(-)
            - multiplication(*)
            - division(/)
            - modulus(%)
            - exponentiation(**)
 */

function divideNum(num1, num2){
    result = num1 / num2;
    //console.log(result);
    return result;
};

let quotientResult = divideNum(50, 5);
console.log(`The result of the operation is ${quotientResult}.`);

/*
    Assignment Operator
        - is used to assign value to a variable or property of an obect
        - equal sign(=)
 */

let variable = 'initial value';
// 
let assignNumber = 8;

// long method
assignNumber = assignNumber + 2;
console.log(`The result of the addition assignment operator is ${assignNumber}`);
// addiition assignment operator as shorthand
assignNumber += 2;
console.log(`The result of the addition assignment operator is ${assignNumber}`);

// subtraction/multiplication/division/modulus assignment operator (-=, *=, /=, %=)
let assignResult = 4;
assignResult -= 2;
console.log(`The result of the subtraction assignment operator is ${assignResult}`);
assignResult *= 2;
console.log(`The result of the multiplication assignment operator is ${assignResult}`);
assignResult /= 3;
console.log(`The result of the division assignment operator is ${assignResult}`);
assignResult %= 3;
console.log(`The result of the modulus assignment operator is ${assignResult}`);

let assignResult1 = 4;
assignResult1 %= 3;
console.log(`The result of the modulus assignment operator is ${assignResult1}`);

// PEMDAS
let mdas = 1 + 2 - 3 * 4 / 5;
console.log(`The result of mdas is ${mdas}`);
/*
    mdas = 1 + 2 - 3 * 4 / 5;
    mdas = 1 + 2 - 12 / 5;
    mdas = 1 + 2 - 2.4;
    mdas = 3 - 2.4;
    mdas = 0.6;
*/
// order of operation can be changed by adding parentheses to the logic
let pemdas = 1 + (2 - 3) * (4 / 5);
console.log(`The result of pemdas is ${pemdas}`);
/*
    by adding parethese '()', the order of operation are changed prioritizing operation inside the parentheses
    pemdas = 1 + (2 - 3) * (4 / 5);
    pemdas = 1 + (2 - 3) * 0.8;
    pemdas = 1 + (-1) * 0.8;
    pemdas = 1 + -0.8;
    pemdas = 0.19 or 0.2;
*/

// Increment operator is used to increase the value of variable by 1.
// Syntax: increment = increment + 1 => increment++
/*
    Two types of increment operators:
        - post increment (x++)
            - increases the value of x after it has been evaluated
        - pre increment (++x)
            - increases the value of x before it is evaluated
*/
let x = 2;
console.log(x);

a = ++x;
console.log(a);

b = x++;
console.log(b);

/*
    Decrement operator is used to decrease the value of variable by 1.
        - post decrement (x--)
        - pre decrement (--x)
*/
// The value of z is decreases by a value of one before returning and storing it in a variable.
let z = 3;
// the value of z is at 3 before it was decremented
console.log(z);
let decrement = z--;
// the value of z was decreased reassigning the value to 2
console.log(`The result of post-decrement is ${z}`);

decrement = z--;
console.log(`The result of post-decrement is ${z}`);

// Comparison Operator
/*
    comparison operator
        - are used to compare the values of the left and right operands.
        - return operands

            - Equality or Loose Equality(==)
            - Strict Equality (===)
            - Inequality or Loose Inequality (!=)
            - Strict Equality (!==)
 */
/* 
    Equality or Loose Equality Operator
        - is used to compare two values for equality. The operator usually return true if the values are equal and false otherwise.
        - the equality performs type coericion, which means it converts the values being compared to a common type before performing the comparison.
*/
console.log(1 == 1);//true
console.log(1 == '1');//true - the string '1' is coerced to the number 1 before the comparison is made.
console.log(2 == 1);//false
console.log(true == 1);//true - the boolean true is coerced to the number 1 before the comparison is made.
console.log(null == undefined);//true - null and undefined are equal to each other in the context that they have no value.

/*
    Strict Equality
        - is used to compare two values for equality
        - the operator returns true if the values are of the same type and have same value and false otherwise
        - strict equality does not perform type coercion which means the value being compared must be of the same type to return true
*/

console.log(2 === 2); //true
console.log(2 === '2'); //false - the string '2' is not the same as the number 2.
console.log(true === 1); //false
console.log(null === undefined);//false - null and undefined are not the same type

// Note as good practice, we have to use strict equality operator instead of loose equality to avoid unexpected results due to type coercion.

/*
    Type Coercion
        - is the implicit conversion of values from one data type to another.
        - this happens when operations are performed on different data types that would normally be 
        - values are automatically converted from one data type to another data type inorder to resolve operations.
*/

let numA = '10';//numstring
let numB = 12;//number

//adding/concatenating as string and a number will result a string.
let coercionResult = numA + numB;
console.log(typeof(coercionResult));

let numC = 16;
let numD = 14;

let nonCoercion = numC + numD;
console.log(typeof(nonCoercion));

// the boolean 'true' is associated with the value of 1
let numE = true + 1;
console.log(numE);
console.log(typeof(numE));

// the boolean 'false' is associated with the value of 0.
let numF = false + 2;
console.log(numF);
console.log(typeof(numF));