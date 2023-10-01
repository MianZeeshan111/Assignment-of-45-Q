let guest_Names: Array<string> = ["Haris", "Abdullah", "Ali"];

guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, do come to dinner.`);
});

console.log("Abdullah can't come");

guest_Names = ["Haris", "Asad", "Ali"];

guest_Names.map((namesInvites: string) => {
  console.log(`Hey ${namesInvites}, do come to dinner.`);
});
