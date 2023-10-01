function ColorCheck(alien_color: string) {
  if (alien_color == "green") {
    console.log("You just earned 5 points!");
  }
}
ColorCheck("green");
ColorCheck("yellow");

//----------------------------Task-26

const ColorCheck2 = (alien_color2: string) => {
  if (alien_color2 == "green") {
    console.log("you just earned 5 points for shooting the alien");
  } else {
    console.log("you just earned 10 points");
  }
};

ColorCheck2("green");
ColorCheck2("red");

//----------------------------Task-27

const ColorCheck3 = (alien_color3: string) => {
  if (alien_color3 == "green") {
    console.log("you just earned 5 points for shooting the alien");
  } else if (alien_color3 == "yellow") {
    console.log("you just earned 10 points");
  } else if (alien_color3 == "red") {
    console.log("you just earned 15 points");
  }
};

ColorCheck3("green");
ColorCheck3("yellow");
ColorCheck3("red");
