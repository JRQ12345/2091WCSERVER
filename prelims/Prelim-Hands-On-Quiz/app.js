//Task Name: Prelim Hands On Quiz
//Author: Quiambao, Jose Raphael T.
//Section: WD-201

const calc = require('./calculation.js');

var hours = 4;

var days = 6;

var rph = 300;

var sss = 1200;

var taxrate = 0.1;

var pagibig = 300;

var philhealth = 400;

var gross1 = calc.multiply(rph, hours);

var gross2 = calc.multiply(gross1, days);

var tax = calc.multiply(gross2, taxrate);

var deduction1 = calc.add(tax, sss);

var deduction2 = calc.add(pagibig, philhealth);

var deduction3 = calc.add(deduction1, deduction2);

var netSal = calc.subtract(gross2, deduction3);

console.log('The Gross Income is: ' + gross2);

console.log('Tax: ' + tax);

console.log('SSS: ' + sss);

console.log('Pag-Ibig fund: ' + pagibig);

console.log('PhilHealth: ' + philhealth);

console.log('Total Deductions: ' + deduction3);

console.log('The Net Salary is: ' + netSal);
