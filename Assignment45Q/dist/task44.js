const sandwich_order = (items) => {
    console.log("Thes items should be in sandwich: ");
    items.map((names) => console.log(names));
};
let items = ["Patti", "Onions", "Salad"];
sandwich_order(items);
items = ["Chicken", "Cheese", "Salad", "Pickles"];
sandwich_order(items);
export {};
