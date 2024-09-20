type User = {
    firstName: string 
    age: number
    email: string 
    password?: string
    orders: string []  
}

const user: User = {
    firstName: 'Mariana Thurt',
    age: 20,
    email: 'mariana@gmail.com',
    password: 'Dg#42241',
    orders: ['Queue one', 'Queue two']
}

console.log(user)