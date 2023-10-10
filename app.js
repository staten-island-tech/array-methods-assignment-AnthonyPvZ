const people = [
    {firstname:"James", lastname: "Vitolo", age: 17, classes:["Math", "Ela"]},
    {firstname:"Karen", lastname:"Adams", age: 37, classes:["Ela", "Art"]},
    {firstname:"Mike", lastname:"Ehrmantraut", age: 60, classes:["Art", "Technology"]},
    {firstname:"Skyler", lastname:"White", age: 39, classes:["Math", "Technology"]}
]

people.forEach((people)=>console.log(people.firstname));
people.forEach((people)=>console.log(people.lastname));
people.forEach((people)=>console.log(people.age));
people.forEach((people)=>console.log(people.classes));

const adults = people.filter(function(person) {
    return person.age > 18
});
console.log(adults);