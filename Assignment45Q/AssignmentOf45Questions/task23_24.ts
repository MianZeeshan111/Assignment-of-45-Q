let car_Name: string = "Mitsubishi";

console.log(
  "If car_Name is equal to Mitsibishi then true ",
  car_Name == "Mitsubishi"
);

console.log(car_Name != "Mitsubishi");
console.log(car_Name == "Civic");
console.log(car_Name != "Civic");

let value: number = 5;

console.log(value != 3);
console.log(value == 5);
console.log(value > 6);
console.log(value < 6);
console.log(value >= 8);
console.log(value <= 10);

console.log(value > 3 && value < 15);
console.log(value == 3 || value != 2);

let string_Array: Array<string> = ["mehran", "civic", "mercedes"];
console.log(string_Array.includes("mercedes"));
console.log(string_Array.includes("Cultus"));
console.log(string_Array.includes("mehran"));
console.log("if includes then true !, ", string_Array.includes("civic", 1));
