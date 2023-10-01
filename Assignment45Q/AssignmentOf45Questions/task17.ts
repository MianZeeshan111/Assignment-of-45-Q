let guest_Names: Array<string> = ["Haris", "Abdullah", "Ali"];

guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, do come to dinner.`);
});

console.log("Abdullah can't come");

guest_Names = ["Haris", "Asad", "Ali"];

guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, do come to dinner.`);
});

console.log("I just found bigger table, means more people to have fun.");

guest_Names.unshift("Qasim");
guest_Names.splice(2, 0, "Jawaid");
guest_Names = guest_Names.concat("Usman");
guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, do come to dinner.`);
});

console.log("I can only invite two people for dinner!");

console.log(`I'm Sorry, ${guest_Names.pop()} you can't come to dinner.`);
console.log(`I'm Sorry, ${guest_Names.pop()} you can't come to dinner.`);
console.log(`I'm Sorry, ${guest_Names.pop()} you can't come to dinner.`);
console.log(`I'm Sorry, ${guest_Names.pop()} you can't come to dinner.`);

guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, do come to dinner, you are still invited.`);
});

guest_Names.pop();
guest_Names.pop();

guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, No one.`);
});
