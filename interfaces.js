var emailUser = {
    email: 'thiago@gmail.com',
    firstName: 'Mateus'
};
// Bellow, an error Will occur, because the 'fristName' is readonly
emailUser.firstName = 'Diego';
