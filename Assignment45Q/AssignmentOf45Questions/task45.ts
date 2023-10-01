const object_Of_Car = (manufacturer: string, model: string, ...args: any) => {
  let car: any = { manufacturer, model };
  Object.entries(args).map(([key, value]) => {
    car = { ...car, ...(value as Object) };
  });
  return car;
};

console.log(object_Of_Car("Rolls Royce", "BMW"));
console.log(
  object_Of_Car("Mercedes-Benz", "Mercedes", { color: "Red, Black" })
);
