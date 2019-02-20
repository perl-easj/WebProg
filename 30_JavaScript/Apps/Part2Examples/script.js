
// An empty object...
var emptyObj = {};


// A "Person" object (NB: There is no Person class...)
// Note the comma-separation used for object literals
var personA = {
    firstName : "Per",
    lastName : "Laursen",
    gender : "male",
    status : "single",
    address : {
        streetName : "Primulahaven",
        streetNo : 18,
        city : {
            zipCode : 2765,
            cityName : "Smørum"
        }
    },

    formalName : function() {
        return this.title(this.gender, this.status) + this.firstName + " " + this.lastName;
    },

    title : function(gender, status) {
        if (gender === "male")
        {
            return "Mr. ";
        }
        else if (status === "married")
        {
            return "Mrs. ";
        }
        else
        {
            return "Miss ";
        }
    }
};

// A "Person" object (NB: There is no Person class...)
// Note the comma-separation used for object literals
var personB = {
    firstName : "Anne",
    lastName : "Madsen",
    gender : "female",
    status : "married",
    address : {
        streetName : "Solvangen",
        streetNo : 210,
        city : {
            zipCode : 4000,
            cityName : "Roskilde"
        }
    },

    formalName : function() {
        return this.title(this.gender, this.status) + this.firstName + " " + this.lastName;
    },

    title : function(gender, status) {
        if (gender === "male")
        {
            return "Mr. ";
        }
        else if (status === "married")
        {
            return "Mrs. ";
        }
        else
        {
            return "Miss ";
        }
    }
};

console.log(personA.formalName());
console.log(personB.formalName());


// A function constructor for a "SimplifiedPerson" object
function SimplifiedPerson(
    firstName, 
    lastName, 
    gender, 
    status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.status = status;
}

var spA = new SimplifiedPerson("Per", "Laursen", "male", "single");
var spB = new SimplifiedPerson("Anne", "Madsen", "female", "married");

console.log(spA);
console.log(spB);



// Adding functions directly to objects:
spA.formalNameDirect = function() {
    return this.titleDirect(this.gender, this.status) + this.firstName + " " + this.lastName;
};

spA.titleDirect = function(gender, status) {
    if (gender === "male")
    {
        return "Mr. ";
    }
    else if (status === "married")
    {
        return "Mrs. ";
    }
    else
    {
        return "Miss ";
    }
};

console.log(spA.formalNameDirect());
// console.log(spB.formalNameDirect());



// Adding functions to prototype:
SimplifiedPerson.prototype.formalName = function() {
    return this.title(this.gender, this.status) + this.firstName + " " + this.lastName;
};

SimplifiedPerson.prototype.title = function(gender, status) {
    if (gender === "male")
    {
        return "Mr. ";
    }
    else if (status === "married")
    {
        return "Mrs. ";
    }
    else
    {
        return "Miss ";
    }
};

console.log(spA.formalName());
console.log(spB.formalName());




function Person(
    firstName, 
    lastName, 
    gender, 
    status, 
    address) {
        SimplifiedPerson.call(this, firstName, lastName, gender, status);
        this.address = address;
}
Person.prototype = Object.create(SimplifiedPerson.prototype);

var pA = new Person("Palle", "Hansen", "male", "married", {
    streetName : "Violhaven",
    streetNo : 33,
    city : {
        zipCode : 2765,
        cityName : "Smørum"
    }});
console.log(pA.formalName());
console.log(pA.address);



class SimplifiedPersonES6 {
    constructor(firstName, lastName, gender, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.status = status;
    }

    formalName() {
        return this.title(this.gender, this.status) + this.firstName + " " + this.lastName;
    }

    title(gender, status) {
        if (gender === "male")
        {
            return "Mr. ";
        }
        else if (status === "married")
        {
            return "Mrs. ";
        }
        else
        {
            return "Miss ";
        }
    }
}

class PersonES6 extends SimplifiedPersonES6 {
    constructor(firstName, lastName, gender, status, address) {
        super(firstName, lastName, gender, status);
        this.address = address;
    }
}


var pES6 = new PersonES6("Anette", "Ovesen", "female", "single", {
    streetName : "Solgade",
    streetNo : 8,
    city : {
        zipCode : 2750,
        cityName : "Ballerup"
    }});

console.log(pES6.formalName());
console.log(pES6.address);