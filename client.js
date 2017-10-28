console.log('client.js');

// object:  a data structure in which to store data
// can store properties
// key value pairs --> key is a string



// PROPERTY ACCESS
// BRACKET NOTATION
// DOT NOTATION
// DOT VS BRACKET
// NESTED OBJECTS
// OBJECT LITERALS
// ITERATION  -->  aka LOOPING



// empty object stored in a variable
// object literal notation
var box = {};

// DOT NOTATION
// use dots to access methods
// use dots to access properties
// whatever is to the left of a dot, is an object
// do NOT use dot noation with a variable
box.material = 'cardboard';

// box.material returns 'cardboard' --> checks memory and returns what is stored
console.log(box.material);

var cb = box.material;
// cb returns 'cardboard'
console.log(cb);

// change box.material to 'titanium'
box.material = 'titanium';
// still returns 'cardboard', because it is stored by value
// checks memory and returns what is stored
console.log(cb);

// box.size;
// returns undefined (undefined is its own type)



// BRACKETS
// 2 examples below are interchangeable
box['material'] = 'cardboard';

box.material;

var key = 'material';
// logs 'cardboard'
console.log(box[key]);
// logs 'undefined'  -->  looks up 'key' as a property on the object 'box'
console.log(box['key']);
// logs 'undefined'  -->  looks up 'key' as a property on the object 'box'
console.log(box.key);
// logs 'cardboard'
console.log(box[key]);


// EXPRESSIONS
var func = function() {
  return 'material';
};
// logs 'cardboard'
console.log(box[func()]);


// numbers and unusual characters (^&*) are non-valid characters
// cannot be variables

// STORING DATA
// store an object
box['size'] = {
  'height': 2,
  'weight': 80
};
// when we store functions as a property on an object, we call it a method
box.area = function() {
  return box.size.height * box.size.width;
};



// ITERATION / LOOPING
// for in loop
for(var key in box) {
  // logs 'material' 'size' 'area'
  // 'key' holds the value of the property name
  console.log(key);
}



// eFarmony exercise
// empty animal object stored in a variable
// object literal notation
var animal = {};

// giving the animal the name 'Mittens'
// dot notation
animal.username = 'Mittens';

// tagline for Mittens is 'Pet me!'
// bracket notation
animal['tagline'] = 'Pet me!';

// empty array stored in a variable
var noises = [];
animal.noises = noises;

// console logging our animal object returns:
// username: 'Mittens', tagline 'Pet me!', noises: Array[0]
console.log(animal);


var count = 0;

// loop through the properties in the animal object
for (var key in animal) {
  // incrementing the counter
  // count = count + 1
  count++;
  // accessing the property name of the object
  if (key === 'username') {
    // accessing the value of the key
    console.log('Hi, my name is ' + animal[key]);
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
}



// ARRAYS
// an array is a container, just like an object
// an array is a data structure
// an array is an object
// an array is a subclass of an object, it inherits from an object
var box2 = [];

box2[0] = true;
box2[1] = 'meow';
// adding an object to the box
box2.push({'hello' : 'goodbye'});

var i = 0;

box2[i];  // evaluates to true
box2[1];  // evalues to 'meow'
box2.pop();  // returns the last item in the array, the object {'hello' : 'goodbye'}, and returns it -> is destructive
console.log(box2);  // evalutes to [true, 'meow']

box2['size'] = 9;
box2[0] = 'meow';

box2['size'];  // evaulates to 9
box2.size;  // evalutes to 9
box2['0'];  // evaluates to 'meow'
box2[0];
console.log(box2[0]);

for (var k in box2) {
  console.log(k);  // logs the property names
  console.log(box2[k]);  // logs the values
  console.log(box.k);  // logs undefined, because you cannot use dot notation with a variable
}

for (var i = 0; i < box2.length; i++) {
  console.log(box2[i]);
  console.log(i);
}

console.log(box2['length']);  // logs 2
console.log(box2[length]);  // logs meow
console.log(box2[box2.length]);  // logs undefined



// ARRAY EXERCISE
var noiseArray = ['purr'];

// puts 'hiss' in the first position -> native JavaScript array method
noiseArray.unshift('hiss');
// a method is a function as denoted by the function call of parentheses
noiseArray.push('meow');

noiseArray[3] = 'growl';

// index starts from 0, so the last index is 1 less than the length
console.log(noiseArray.length);

// ['hiss', 'purr', 'meow', 'growl']
console.log(noiseArray);

// overriding empty array
animal.noises = noiseArray;
// object -> {username: 'Mittens', tagline: 'Pet me!', noises: Array[4]}
console.log(animal);



// 2nd ARRAY EXERCISE
var animals = [];

animals.push(animal);

var quackers = {username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl']};

// same as array.push -> adds quackers to the animals array
animals[animals.length] = quackers;

// [{username: 'Mittens', tagline: 'Pet me!', noises: Array[4]}
//  {username: 'DaffyDuck', tagline: 'Yippeee!', noises: Array[4]}]
console.log(animals);

var dog = {
  username: 'Kabosu',
  tagline: 'Such profile',
  noises: ['bark', 'woof', 'wow']
};

var honeyBadger = {};
honeyBadger.username = 'Randall';
honeyBadger.tagline = 'Honey badger dont care';
honeyBadger.noises = ['screech', 'growl'];

animals.push(dog, honeyBadger);

// logs 4
console.log(animals.length);




// FUNCTIONS
// small modules of code that isolate a certain operation -> encapsulation
// code that you want repeated
// functions are objects
// pass arguments
// there are parameters that hold values
// functions have scope
// () is the invocation operator

//  add is the FUNCTION NAME
var add = function(a, b) {  // curly brackets represent the DECLARATION / DEFINITION
                // a & b are the PARAMETERS
// return statement represents the FUNCTION BODY
  return a + b;
};
// INVOCATION / CALL-TIME
add(3, 4, 5); // 3, 4, 5 are the arguments


// DEFINITION WITH JQUERY
// function expression
// variable hoisting
var nameImprover = function(name, adj) {
  return 'Col ' + name + ' Mc' + adj + ' pants';
};

// function declaration
function nameStaySame(name) {
  return name;
}

// $ is a function name
$('body').hide(); // hide is the name of a function

            // function definition without a name
myArr.forEach(function(val) {
  console.log(val);
});

// jquery            // function definition
$('button').on('click', function() {
       // log is a function name
  console.log('Don\'t press my buttons!'); // function body
});



// FUNCTION BODY
// located between curly brackets
// body is intepreted when the function is called


// ARGUMENTS & PARAMETERS
// are fundamentally different from one another
// parameters are passed in right after the function key word
// parameters are placeholders like variables, they hold values
// parameters have value when you pass arguments
