// Variables
const age: number = 29
const firstName: string = "myName"
let Idoknow: any = 45

// Lists
const ids: number[] = [1, 2, 3, 4, 5]
const names: string[] = ['Thiago', 'Fernando', 'Kelly', 'Raquel','Sergio']

// Tuples 
const person: [number, string] = [1, "Senhorita Kieckhoefel"]

// List tuples 
const people: [number, string][] = [
    [1, "Raquel"],
    [2, "Diego"]
]

// Intersections 
const productId : string | number | boolean = 2 

// Enum 
enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up

// Type Assertions 
const productName: any = "Boné"

let itemId = <string>productName

