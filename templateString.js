let text = `He's often called "Johnny"`;
let multiLine = `The quick
brown fox
jumps over
the lazy dog`;
let firstName = "John";
let lastName = "Doe";

let fullName = `Welcome ${firstName} , ${lastName}!`

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1+ VAT)).toFixed(2)}`
console.log(total);
