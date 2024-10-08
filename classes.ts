interface IPerson {
    id: number
    name: string 
    age: number 
    sayMyName(): string
}
class Person implements IPerson{
    id: number
    name: string 
    age: number 

    constructor(id: number, name: string, age: number) {
        this.id   = id
        this.name = name 
        this.age  = age 
    }

    sayMyName(): string {
        return this.name
    }
}

const p = new Person(1, 'Thiago', 21)


// Subclasses 