// net salary = grossSalary - nhifDeduction - nssfDeduction - tax
//gross salary = basicSalary + Benefits
//NHIF Deductions = grossSalary*NHIF RATE
//NSSF Deductions = grossSalary*NSSF RATE
//Taxable Income = Gross Salary - NHIF Deductions - NSSF Deductions


const grossSalary = (basicSalary, Benefits) => {
    console.log(`gross Salary ${basicSalary + Benefits}`);
   
}
const nhifDeductions = (grossSalary, NHIF_RATES) => {
    console.log(`nhifDeductions ${grossSalary * NHIF_RATES}`);
   
}
const nssfDeductions = (grossSalary, NSSF_RATES) => {
    console.log(`nssfDeductions ${grossSalary * NSSF_RATES}`);
   
}
const taxableIncome = (grossSalary, nhifDeductions,nssfDeductions) => {
    console.log(`taxable Income ${grossSalary - nhifDeductions - nssfDeductions}`);

}
const netSalary = (grossSalary, NHIFDeduction, NSSFDeduction,tax) => {
    console.log(`Net Salary ${grossSalary - NHIFDeduction - NSSFDeduction-tax}`);

}
grossSalary(2000000, 4000000);

nhifDeductions(1200, 1800);

nssfDeductions(1000, 500);

taxableIncome(600000, 300000, 100000);

netSalary(6000000, 3000, 1500, 1000000);

