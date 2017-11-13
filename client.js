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
// functions are OBJECTS
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
// myArr.forEach(function(val) {
//   console.log(val);
// });

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
// order is important
// arguments are passed to the function at call time


// RETURN & SIDE EFFECTS
// if you do not have a return statement in your function, if will return 'undefined'
// console.log() is considered a side effect


// REVIEW
var add = function(a, b) {
  console.log(arguments); // logging arguments with 'arguments' key word
  // console.log(Array.protoype.slice.call(arguments, 0)); // runs an error
  return a + b;
  return a + b + arguments[2]; // use this to add 3 + 10 + 15 in add call below
};
add(3, 4, 5); // 7
add(4, 10, 3); // to return 13 add c as an argument and return b + c
add(3, 10, 5); // see second return statement in add function



// CONSTRUCTORS
// At its core, a constructor is a function that returns an object

// A in Animal is capitalized to show other programmers it is a constructor
function AnimalMaker(name) {
  // returning an object
  return {
    // property speak is a function that logs the name of the animal
    speak: function() {
      console.log('my name is ', name);
    },
    name: name,
    owner: 'Bianca'
  };
}

// use contructor function to create animal object
var myAnimal = AnimalMaker('Cheetah');
console.log(myAnimal.speak());

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

// LOOPING -> loop through animalNames to create animal object
var farm = [];

for (var i = 0; i < animalNames.length; i++) {
  // 1st option
  farm.push(AnimalMaker(animalNames[i]));
  console.log(farm);
  // 2nd option
            // calling AnimalMaker with one value, animalNames
  var animal = AnimalMaker(animalNames[i]);
  farm.push(animal);
  console.log(farm);
  // 3rd option
  farm[i] = AnimalMaker(animalNames[i]);
  console.log(farm[i]);
}

for (var i = 0; i < farm.length; i++) {
  console.log(farm[i].speak());
}



//
function AnimalTestUser(username) {
  var argLength = arguments.length;
  var otherArgs = [];  // empty array into which other arguments will be pushed
  if (args > 1) {
    for (var i = 1; i < argLength; i++) {
      otherArgs.push(arguments[i]);
    }
  }
  return {
    username: username,
    otherArgs: otherArgs
  };

  var AnimalTest = function(username) {
    return {
      username: username
    };
  };

  var myCow = AnimalTest('Bessie');
  console.log(myCow.username); // prints 'Bessie'

  var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3]);
  console.log(testSheep);
}

// creating a constructor function for our animal model
function AnimalCreator(username, species, tagline, noises) {
  var animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
  return animal;
}
// create sheep from constructor function above
// 'Cloud' = username
// 'sheep' = species
// 'You can count on me!' = tagline
// 'baahhh', 'arrgg', 'chewchewchew' = noises
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!',
  ['baahhh', 'arrgg', 'chewchewchew']);
  console.log(sheep);


function addFriend(animal, friend) {
  // take animal from var animal in constructor function above
  // animal.friends -> push the username of the friend into the friends array
  animal.friends.push(friend.username);
  animal.friends.push(friend);
}

// create cow from construtor function
var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['moo', 'moooo']);
console.log(cow);

// create llama from constructor function
var llama = AnimalCreator('Zeny', 'llama', 'lllll', ['sdf', 'sdfsf']);
console.log(llama);

addFriend(sheep, cow);
console.log(sheep);

addFriend(sheep, llama);
console.log(sheep);


//
var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);


function addMatchesArray(farm) {
  // for(var i in farm)
  for (var animal in farm) {
    // gives each animal in the farm the ability to have a match
    // farm[i].matches = [];
    farm[animal].matches = [];
  }
}
addMatchesArray(myFarm);
console.log(myFarm[0]);


function giveMatches(farm) {
  for (var animal in farm) {
    farm[animal].matches.push(farm[animal].friends[0]);
  }
}
giveMatches(myFarm);
console.log(myFarm[0]);



// NESTING OBJECTS
var box = {};
box.innerBox = {};
console.log(box.innerBox);
box.innerBox.full = true;
console.log(box.innerBox);
box.innerBox.babyBox = {};
console.log(box.innerBox.babyBox);

var myInnerBox = box.innerBox;
console.log(myInnerBox);
box.innerBox.babyBox.says = 'What\'s up?';
console.log(box.innerBox.babyBox); // a property was set to 'What/s up?' above,
// therefore 'What/s up?' logs to the console

box.otherBox = {};
var innerBox2 = 'otherBox';
box.otherBox.full = false;


// NESTED DATA
var friends = [];
// pushing the first and second animal objects' names into the friends array
friends.push(animals[0].username, animals[1].username);
console.log(friends);

// relationships object
var relationships = {};
// relationships object has a property friends that is set to the friends array
relationships.friends = friends;
console.log(relationships);
console.log(Object.keys(relationships).length);

// empty array
var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships);

// loop through your farm
for (var i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships;
}
console.log(animals);


// ANATOMY REVIEW
// add2 is function name
// a and b are parameters that do not have value until the function is called and arguments are passed
// {} contains the function body
// add2(3, 4, 5) is the function call/invocation
// (3, 4, 5) are the arguments
var add2 = function(a, b) {
  return a + b
};
add2(3, 4, 5);


// SCOPE
// defines where we can access variables -> where variables live and exist
// where variables are relevant -> hierarchy or spaces
// where variables have meaning
// created dynamically -> when we call the function

// LOCAL SCOPE
var func = function() {
  var local = true;
};
// console.log(local); -> logs an error because local is defined within the function


// GLOBAL SCOPE
var x = 'global!';


// PARENT VS CHILD SCOPE
var g = 'global';

function blender(fruit) {
  var b = fruit;
  var y = 'yogurt';

  // nested child function
  // local to the blender function
  function blendSmoothie() {
    alert(b + ' and ' + y + ' makes ' + b + ' swirl');
  }
  blendSmoothie();
}
blender('blueberry');


// PRECEDENCE
// declare a function called go
// then the go function is called
// then the function body runs line-by-line, after the function is called
// then alert outside go
function go() {
  var l = 'local';
  var g = 'in here!';
  alert(g + ' inside go');
}
go();
alert(g + ' outside go');


// BLOCK SCOPE
// defined as anything within curly brackets that is not an object
var inBlock = false;
// start at 0, increment until i is less than 5
// then will set inBlock equal to true each time it loops
for (var i = 0; i < 5; i++) {
  var inBlock = true;
}
// evaluate whether inBlock is true or false
if(inBlock) {
  console.log('Is there block scope? ' + !inBlock);
}


// CLOSURE
var closureAlert = function() {
  // var x = 'Help! I am a variable stuck in a closure!';
  // changed to:
  var x = 0;
  // inner function
  var alerter = function() {
  // alert(x);
  // changed to:
  alert(++x);
  };
  // setTimeout(alerter, 1000);
  // native function
  // will wait a thousand milliseconds (which is one second)
  // there will be no pause, because it will run asyncronously
  // then it will call the alerter function

  // alerter();
  // changed to:
  return alerter;
};
// closureAlert calls the definition of the function (the code itself)
// closureAlert() calls the function
// closureAlert();
var funcStorer = closureAlert();
var funcStorer2 = closureAlert();
funcStorer();
