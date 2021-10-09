const myProfile = {
    firstName: "Abu",
    lastName: "Hasan",
    salary: 20000,

    myName: function(){
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
    },
    mySalary: function(amount,tax){
        this.salary = this.salary - amount - tax;
        return this.salary;
    }
}
const heroProfile = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 30000,
}
//Bind Method
// const heroChargeBill = myProfile.mySalary.bind(heroProfile);
// heroChargeBill(1000);
// console.log(heroProfile.salary);

// Call Method
myProfile.mySalary.call(heroProfile,200,30);
console.log(heroProfile.salary);

//Apply Method
myProfile.mySalary.apply(heroProfile,[500,90]);
console.log(heroProfile.salary);