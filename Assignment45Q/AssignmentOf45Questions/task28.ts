let StageOfLife = (age: number) => {
  if (age < 2) {
    console.log("Person is baby");
  } else if (age == 4 && age < 13) {
    console.log("Person is kid");
  } else if (age == 13 && age < 20) {
    console.log("Person is teenager");
  } else if (age >= 65) {
    console.log("Person is elder");
  }
};

StageOfLife(10);
StageOfLife(20);
StageOfLife(55);
