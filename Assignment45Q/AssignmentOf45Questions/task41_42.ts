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

show_magicians(magician_names);

//--------------------------------task-42

const make_great = (names_array: Array<string>) => {
  names_array.map((name: string, index: number) => {
    names_array[index] = "The Great " + name;
  });
};
make_great(magician_names);
show_magicians(magician_names);
