/*
Things to remember:

    1. There are differenet kinds of literals used in javascript:
        a. Object Literals, indicated by {}
        b. Boolean Literals, indicated by true or false
        c. String Literals, indicated by '' or ""
        d. Template Literals, indicated by backticks ( ` ) :
            The backticks ( ` ) character in Template Literals helps to write a cleaner code.

    2. Template literals are a new feature introduced in ECMAScript 2015/ ES6 and are delimited with backticks ( ` ). It
        provides an easy way to create multiline strings and perform string interpolation. Template literals are the string
        literals and allow embedded expressions.

    3. We can use placeholders while using Template Literals. Inside this placeholder, we can pass the name of a variable or
        a constant or any kind of expressions like any mathematical expressions or can call any functions that return values. 

*/


// To display a message with a perticular format using string literal, we can use any of the 3 different ways mentioned 
// below. But this will make the code looks uglier.

const message = 'This is my\n first message'; //method 1

const message =                               //method 2
'This is my\n' +
'first message';

const message =                               //method 3
'This is my\n'+
 '\'first\' message';


 // Display the same message using Template Literals

 const message = `This is my
 first message`;

//  Let's take another example where we will be writing an email using Template Literals

const mailBody = 
`Hi John,

Nice to here you. Hope you are doing well.

Thanks and Regards
Soumili`

//  We can use placeholder while using Template Literals. Inside this placeholder, we can pass the name of a variable or a
//  constant or any kind of expressions like any mathematical expressions or can call any functions that return values. 

const name = 'John';

const mailBody = 
`Hi ${name} ${3 + 2},

Nice to here you. Hope you are doing well.

Thanks and Regards
Soumili`

/* Output of the above will be: */

// Hi John 5,

// Nice to here you. Hope you are doing well.

// Thanks and Regards
// Soumili