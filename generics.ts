// Generics normal 
function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["Thiago", "Maiara"])
const firstValueFromNumberArray = getFirstValueFromArray<number>([20, 17])

console.log('The first number in array:', firstValueFromNumberArray)
console.log('The first string in array:', firstValueFromStringArray)

// Example generics using promisses
const returnPromise = async (): Promise<string> => {
    return "Return function"
}

// Example generics using classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y 
})
