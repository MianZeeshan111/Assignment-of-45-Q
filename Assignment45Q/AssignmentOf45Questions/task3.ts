const personName1 = "AbdulRehman";

console.log("LowerCase", personName1.toLowerCase());

console.log("UpperCase", personName1.toUpperCase());

console.log(
  "TitleCase",
  personName1.charAt(0).toUpperCase() + personName1.slice(1).toLowerCase()
);
export {};
