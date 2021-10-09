const myProfile = {
    firstName: "Abu",
    lastName: "Hasan",
    salary: 20000,

    myName: function(){
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
    },
    mySalary: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroProfile = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 30000,
}
const heroChargeBill = myProfile.mySalary.bind(heroProfile);
heroChargeBill(1000);
console.log(heroProfile.salary);