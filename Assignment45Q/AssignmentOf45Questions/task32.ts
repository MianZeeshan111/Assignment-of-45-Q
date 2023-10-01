const current_users = ["Ali", "Asif", "Dawood", "AbdulRehman", "Qasim"];
const new_users = ["Asif", "Mobeen", "Mateen", "Musharraf", "Dawood"];

new_users.map((names: string) => {
  //names = names.toLowerCase();
  if (current_users.includes(names.toLowerCase())) {
    console.log(names, "This name is already used, enter a new username");
  } else {
    console.log(names, "username is available");
  }
});
