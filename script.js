let arr = [
 { name: "Jahon", age: 27, job: "it", totalBalance: 140 },
 { name: "Aziz", age: 25, job: "designer", totalBalance: 200 },
 { name: "Bek", age: 30, job: "developer", totalBalance: 180 },
 { name: "Ali", age: 22, job: "manager", totalBalance: 220 },
 { name: "Sardor", age: 28, job: "tester", totalBalance: 160 },
 { name: "Murod", age: 26, job: "it", totalBalance: 145 },
 { name: "Kamol", age: 29, job: "developer", totalBalance: 210 },
 { name: "Bobur", age: 24, job: "designer", totalBalance: 190 },
 { name: "Shoxrux", age: 31, job: "manager", totalBalance: 230 },
 { name: "Dilshod", age: 27, job: "tester", totalBalance: 170 },
 { name: "Rustam", age: 23, job: "it", totalBalance: 155 },
 { name: "Farrukh", age: 32, job: "developer", totalBalance: 240 },
 { name: "Jasur", age: 28, job: "designer", totalBalance: 175 },
 { name: "Otabek", age: 26, job: "manager", totalBalance: 225 },
 { name: "Sanjar", age: 30, job: "tester", totalBalance: 165 },
 { name: "Ulugbek", age: 25, job: "it", totalBalance: 150 },
 { name: "Sherzod", age: 29, job: "developer", totalBalance: 215 },
 { name: "Erkin", age: 27, job: "designer", totalBalance: 185 },
 { name: "Zafar", age: 31, job: "manager", totalBalance: 235 },
 { name: "Habib", age: 28, job: "tester", totalBalance: 175 }
];


let result = arr.filter(({totalBalance,age,job})=> {
    return totalBalance > 150 && job === "developer"; 

}); 
 module.exports = result; 