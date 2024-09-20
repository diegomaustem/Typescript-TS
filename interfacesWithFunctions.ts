interface CalculatorFunction {
    (x: number, y: number): number
}

const amount: CalculatorFunction = (x: number, y: number): number => {
    return x + y
}

const subtration: CalculatorFunction = (x: number, y: number): number => {
    return x - y
}

const multiplication: CalculatorFunction = (x: number, y:number): number => {
    return x * y
} 

const division: CalculatorFunction = (x: number, y:number): number => {
    return x / y
} 

console.log('Your sum is:', amount(2, 8))
console.log('Your subtration is:', subtration(2, 8))
console.log('Your multiplication is:', multiplication(2, 8))
console.log('Your division is:', division(2, 8))