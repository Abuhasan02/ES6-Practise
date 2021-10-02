const ages = [12,23,43,21];
const ages1 = [43,53,33,67];
const ages2 = [13,73,53,97];

// const allAges = ages.concat(ages1).concat(ages2);
const agesAll = [...ages,...ages1,...ages2];
console.log(agesAll);

const number = [23,54,56,64,12];
const maxnumber = Math.max(...number);
console.log(maxnumber);