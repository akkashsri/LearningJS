class Person{
    constructor(name, birthYear){
        this.name= name;
        this.yearOfBirth= birthYear;
    }

    getDetails = () =>{
        return `Name: ${this.name} having age: ${2021-this.yearOfBirth}`;
    }

}

class Pilot extends Person{
    constructor(name, birthYear, experience, type){
        super(name, birthYear);
        this.experience = experience;
        this.type = type;
    }

    getData = () =>{
       console.log(`${this.getDetails()} and Experience: ${this.experience} and Type: ${this.type}`);
    }

}

    var john = new Pilot('John', 1980, 20, 'Commercial');
    john.getData();

    // var akash = new Person('Akash',2000);
    // console.log(akash.getDetails());
