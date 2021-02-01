class Person{
    constructor(name, birthYear){
        this.name= name;
        this.yearOfBirth= birthYear;
    }

    getDetails = () =>{
        return `Name: ${this.name} having age: ${2021-this.yearOfBirth}`;
    }

}

    var akash = new Person('Akash',2000);
    console.log(akash.getDetails());
