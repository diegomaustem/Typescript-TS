"use strict";
// Variables
const age = 29;
const firstName = "myName";
let Idoknow = 45;
// Lists
const ids = [1, 2, 3, 4, 5];
const names = ['Thiago', 'Fernando', 'Kelly', 'Raquel', 'Sergio'];
// Tuples 
const person = [1, "Senhorita Kieckhoefel"];
// List tuples 
const people = [
    [1, "Raquel"],
    [2, "Diego"]
];
// Intersections 
const productId = 2;
// Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
