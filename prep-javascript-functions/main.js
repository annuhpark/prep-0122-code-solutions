function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hour) {
  return hour * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise: ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingResult = getGreeting('World');
console.log('getGreetingResult Exercise: ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(35, 10);
console.log('addAndMultiplyBy5 Exercise: ', addAndMultiplyBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise: ', getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResult = cube(5);
console.log('cube Exercise: ', cubeResult);
