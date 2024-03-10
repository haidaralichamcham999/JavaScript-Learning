class Person{
    constructor(firstName, lastName){
        this.name =firstName;
        this.cername= lastName;
        this.occupation='Employeed';
    }
    greet(m){
       return `Hello the man ${m} ${this.name} ${this.cername} ${this.occupation}`
    }
    fullName(){
       return `Full Name : ${this.name} ${this.cername} with occupation ${this.occupation}`
    }
}
const person1= new Person('Haidarali', 'Chamcham')
console.log('person greet--->',person1.greet('Mr.'))
console.log('person fullanme', person1.fullName())

class Student extends Person{
    constructor(firstName, lastName){
        super(firstName, lastName)
        this.occupation='Student';
    }
    fullName(){
        return `full name: ${this.name} ${this.cername}`
    }
}

const student1 = new Student('Kasim', 'Chamcham')
console.log('student greet --->', student1.greet('Mr.'))
console.log('student fullname', student1.fullName())