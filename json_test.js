function Employee(name, id, age)
{
    this.name = name;
    this.id = id;
    this.age = age;
}

var employee1 = new Employee("Jorge Valencia", "006872457", 28);

var JSONstr = JSON.stringify(employee1);

console.log(JSONstr);

var parsedJSON = JSON.parse(JSONstr);

console.log(parsedJSON.name, parsedJSON.id, parsedJSON.age);