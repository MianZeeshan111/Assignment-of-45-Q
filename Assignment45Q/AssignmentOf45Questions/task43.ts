const magician_names: Array<string> = [
  "Magician1",
  "Magician2",
  "Magician3",
  "Magician4",
];

const show_magicians = (names_array: Array<string>) => {
  names_array.map((names_array) => {
    console.log(names_array);
  });
};

const make_great = (names_array: Array<string>) => {
  const arr: Array<string> = [];
  names_array.map((name) => {
    arr.push("The Great " + name);
  });
  return arr;
};
let copy_Array: Array<string> = make_great(magician_names);
console.log("Original: ");
show_magicians(magician_names);
console.log("New Array: ");
show_magicians(copy_Array);
