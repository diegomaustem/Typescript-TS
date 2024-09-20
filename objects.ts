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

// Unions

type Author = {
    books: string []
}

// The Author bellow will have all porperty of User also ::: 
const author: Author & User = {
    books: ['My first book', 'My seccond book'],
    firstName: 'Carlos',
    age: 28,
    email: 'carlos@gmail.com',
    orders: ['First order', 'Seccond order'],
    password: '123456'
}
