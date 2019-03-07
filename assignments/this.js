/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    function sayHi(name) {
        console.log('Hello' + name);
        console.log(this);
    }

    sayHi('Anthony');

Principle 2

// code example for Implicit Binding
const user = {
    name: 'Anthony',
    age: 'Grown Man',
    user.sayHi() {
        console.log(`Hello, my name is ${this.name}`)
      }
}

// Principle 3

// code example for New Binding
function user(name, age) {
    this.name
    this.age
}
const me = new user('Anthony', 4);

// Principle 4

// code example for Explicit Binding
function sayHi(a, b, c) {
    console.log(`Hello, my name is ${this.name} and i know ${a}, ${b}, ${c}`)

}

const user = {
    name: 'Anthony',
    age: 4
}

const languages = ['Up', 'down', 'right']
sayHi.call(user, languages[0], languages[1], languages[2]);