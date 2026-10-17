import placeholder from "../assets/images/drinks/hot-drinks-placeholder.jpg";

const regularSize = [{ name: "Regular", volume: "16oz" }];

// Replace individual images here when drink-specific photographs are ready.
export const HOT_DRINKS = [
  {
    id: "champurrado",
    name: "Champurrado",
    image: placeholder,
    sizes: [
      { name: "Large", volume: "32oz" },
      ...regularSize,
    ],
  },
  { id: "vanilla-cappuccino", name: "Vanilla Cappuccino", image: placeholder, sizes: regularSize },
  { id: "chocolate-cappuccino", name: "Chocolate Cappuccino", image: placeholder, sizes: regularSize },
  { id: "mocha-cappuccino", name: "Mocha Cappuccino", image: placeholder, sizes: regularSize },
  { id: "cinnamon-tea", name: "Cinnamon Tea / Té de Canela", image: placeholder, sizes: regularSize },
  { id: "hot-coffee", name: "Hot Coffee", image: placeholder, sizes: regularSize },
];
