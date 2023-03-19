class Person {
    constructor(id, fstName, lstName, brthDate) {
        this._id = id;
        this._fstName = fstName;
        this._lstName = lstName;
        this._brthDate = new Date(brthDate);
        this._brthDate = brthDate;
    }
    get id() {
        return this._id;
    }

    get fstName() {
        return this._fstName;
    }

    set fstName(value) {
        this._fstName = value;
    }

    get lstName() {
        return this._lstName;
    }

    set lstName(value) {
        this._lstName = value;
    }

    get brthDate() {
        return this._brthDate;
    }

    get Age (){
        return ((new Date().getTime() - new Date(this._brthDate)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }
    fullName = function (){
        return `${this._fstName} ${this._lstName}`;
    }
}

class Employee extends Person{
    constructor(id, fstName, lstName, brthDate, salary) {
        super(id, fstName, lstName, brthDate);
        this._salary = +salary;
    }


    get salary() {
        return this._salary;
    }

    set salary(value) {
        if(value > this._salary){
            this._salary = +value;
        }
    }

    toString(){
     return   `ID: ${this._id}, First name: ${this._fstName},  
     Last name: ${this._lstName}, Salary: ${this._salary}, Age: ${this.Age}`;
    }
}