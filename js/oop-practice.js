/*eslint-env browser*/

//ONE
/*function Cat() {
    "use strict";
}

var Dog = function () {
    "use strict";
};*/

//or?
/*function cat() {
    "use strict";
}
var bengal = new cat();
window.console.log(bengal.constructor);

var dog = function () {
    "use strict";
}
var dobermanP = new cat();
window.console.log(dobermanP.constructor);*/


//TWO
/*var bengal = new Cat();
var dobermanP = new Dog();*/


//THREE (??)
/*var Animal = function (message) {
    "use strict";
    this.message = message;
};
var message = window.console.log(new Animal("This Animal has been created"));*/


//FOUR (????)
/*function Animal(message) {
    "use strict";
    this.message = window.console.log(new Animal("This Animal has been created"));
}*/


//FIVE??
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var bengalCat = new Animal("cat", "bengal", "brown", 6, 1);


//SIX
var keys;

for (keys in bengalCat) {
    window.console.log(keys);
}

//SEVEN??


//EIGHT??


//NINE??