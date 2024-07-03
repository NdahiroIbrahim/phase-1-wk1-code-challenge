// Net Salary Calculator Prompt

// Prompt user for basic salary and benefits

const basicSalary = parseInt(prompt("Enter your basic salary: "));
const benefits = parseInt(prompt("Enter your benefits: "));

// Calculate gross salary

const grossSalary = basicSalary + benefits;

// Initialize deductions
let payee = 0;
let nhifDeductions = 0;
let nssfDeductions = 0;

// Calculating payee (tax) based on gross salary

if (grossSalary > 288_000) {
  payee = (grossSalary - 288_000) * 0.3;
} else if (grossSalary > 147_580) {
  payee = (grossSalary - 147_580) * 0.25;
} else if (grossSalary > 110_000) {
  payee = (grossSalary - 110_000) * 0.2;
}

// Calculating NHIF deductions based on gross salary

if (grossSalary < 6_000) {
  nhifDeductions = 150;
} else if (grossSalary < 8_000) {
  nhifDeductions = 300;
} else if (grossSalary < 11_000) {
  nhifDeductions = 400;
} else if (grossSalary < 15_000) {
  nhifDeductions = 500;
} else if (grossSalary < 20_000) {
  nhifDeductions = 600;
} else if (grossSalary < 25_000) {
  nhifDeductions = 750;
} else if (grossSalary < 30_000) {
  nhifDeductions = 850;
} else if (grossSalary < 35_000) {
  nhifDeductions = 900;
} else if (grossSalary < 40_000) {
  nhifDeductions = 950;
} else if (grossSalary < 45_000) {
  nhifDeductions = 1_000;
} else if (grossSalary < 50_000) {
  nhifDeductions = 1_100;
} else if (grossSalary < 60_000) {
  nhifDeductions = 1_200;
} else if (grossSalary < 70_000) {
  nhifDeductions = 1_300;
} else if (grossSalary < 80_000) {
  nhifDeductions = 1_400;
} else if (grossSalary < 90_000) {
  nhifDeductions = 1_500;
} else if (grossSalary < 100_000) {
  nhifDeductions = 1_600;
} else {
  nhifDeductions = 1_700;
}

// Calculate NSSF deductions as 6% of gross salary or 1,800 Kes, whichever is lower
nssfDeductions = Math.min(grossSalary * 0.06, 1_800);

// Calculate net salary by subtracting deductions from gross salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Log calculated values to console
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);