var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayMyName = function () {
        return this.name;
    };
    return Person;
}());
var p = new Person(1, 'Thiago', 21);
