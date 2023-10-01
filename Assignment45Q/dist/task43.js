const magician_names = [
    "Magician1",
    "Magician2",
    "Magician3",
    "Magician4",
];
const show_magicians = (names_array) => {
    names_array.map((names_array) => {
        console.log(names_array);
    });
};
const make_great = (names_array) => {
    const arr = [];
    names_array.map((name) => {
        arr.push("The Great " + name);
    });
    return arr;
};
let copy_Array = make_great(magician_names);
console.log("Original: ");
show_magicians(magician_names);
console.log("New Array: ");
show_magicians(copy_Array);
export {};
