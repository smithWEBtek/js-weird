var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Smith";
person["name"] = person.firstname + " " + person.lastname

console.log(person)
console.log(person.name)

person["address"]  = new Object();
person.address.number = "483"
person.address.street = "Donald"
person.address.city = "Bedford"
person.address.state = "NH"
person.address.zip = "03110"
person.address.ziplast4 = "3142"

