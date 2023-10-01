const make_shirts = (size: string, message: string) => {
  console.log("Size of Shirt is: " + size + "Text to print " + message);
};

make_shirts("M", "Let's do it together");

//--------------------------Task-37
const make_shirts_modified = (size = "L", message = "I love TypeScript") => {
  console.log("Size of Shirt is: " + size + "Text to print " + message);
};
make_shirts_modified();
make_shirts_modified("M");
make_shirts_modified("S", "Peace");
