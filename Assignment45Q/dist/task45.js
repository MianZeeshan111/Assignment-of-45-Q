const object_Of_Car = (manufacturer, model, ...args) => {
    let car = { manufacturer, model };
    Object.entries(args).map(([key, value]) => {
        car = { ...car, ...value };
    });
    return car;
};
console.log(object_Of_Car("Rolls Royce", "BMW"));
console.log(object_Of_Car("Mercedes-Benz", "Mercedes", { color: "Red, Black" }));
export {};
