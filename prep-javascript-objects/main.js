var person = {
  firstName: 'SoYoung',
  lastName: 'Park',
  hobby: 'Eating'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');

person.job = 'Tech Person';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Fashion Designer';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log(person);
