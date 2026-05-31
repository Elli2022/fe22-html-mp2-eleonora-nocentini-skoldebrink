export type MenuItem = {
  name: string;
  description: string;
  price: string;
  label: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "California Turkey",
    description:
      "Roast turkey, green chile, avocado, pepper jack och rostat surdegsbröd med deli-dressing.",
    price: "145 kr",
    label: "Signatur",
  },
  {
    name: "Dutch Punch",
    description:
      "Kalkon, bacon, jalapeno havarti, rödlök, romaine och chipotlemajonnäs i Dutch crunch-bröd.",
    price: "149 kr",
    label: "Bästsäljare",
  },
  {
    name: "Hot Pastrami",
    description:
      "Varm pastrami med schweizerost, pepperoncini och pickles på rostat sourdough.",
    price: "155 kr",
    label: "Klassiker",
  },
  {
    name: "New York Stack",
    description:
      "Extra pastrami, dubbel ost, dijon, gul senap och extra pickle på rågbröd.",
    price: "162 kr",
    label: "Deli-favorit",
  },
  {
    name: "Spring Club",
    description:
      "Kalkon, cheddar, bacon, ranch, gurka, tomat och shrettuce på French roll.",
    price: "148 kr",
    label: "Lunch",
  },
  {
    name: "Market Greens Bowl",
    description:
      "Säsongens grönt, marinerade bönor, citrusvinägrett, örter och rostad majs med valfritt protein.",
    price: "138 kr",
    label: "Lättare",
  },
];
