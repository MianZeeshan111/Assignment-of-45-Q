const sandwich_order = (items: Array<string>) => {
  console.log("Thes items should be in sandwich: ");
  items.map((names: string) => console.log(names));
};
let items = ["Patti", "Onions", "Salad"];
sandwich_order(items);
items = ["Chicken", "Cheese", "Salad", "Pickles"];
sandwich_order(items);
