const age:number = 22;
const fullName:string = "Aoufi Abderahmane";
const personInfo = { age , fullName }; 
console.table(personInfo);
const sayName = (name : string = "abdou") => console.log(name); 
sayName(personInfo.fullName);
sayName();
