let usernames: Array<string> = [
  "AbdulRehman",
  "Admin",
  "Arham",
  "Qasim",
  "Zia",
];
usernames.map((names: string) => {
  if (names == "Admin") {
    console.log(`Hello ${names}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${names}, thank you for loggin in!`);
  }
});

usernames = [];

if (!usernames.length) {
  console.log("we need to find some users!");
}
