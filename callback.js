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
myProfile.myName();
console.log(myProfile.mySalary(350));