import { navbarItem, icon, itemProduct } from "../types/types";

// ICON
import travellerIcon from "../assets/img/ic_traveller.svg";
import treasureIcon from "../assets/img/ic_treasure.svg";
import citiesIcon from "../assets/img/ic_cities.svg";

// IMAGE
import mostPickBig1 from "../assets/img/mostpick-1.jpg";
import mostPickBig2 from "../assets/img/mostpick-6.jpg";
import mostPickBig3 from "../assets/img/mospick-7.jpg";
import mostPick2 from "../assets/img/mostpick-2.jpg";
import mostPick3 from "../assets/img/mostpick-3.jpg";
import mostPick4 from "../assets/img/mostpick-4.jpg";
import mostPick5 from "../assets/img/mostpick-5.jpg";

export const navbarItems: navbarItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Browse By",
    link: "browse",
  },
  {
    label: "Stories",
    link: "stories",
  },
  {
    label: "Agents",
    link: "agents",
  },
];

export const iconFeature: icon[] = [
  {
    id: 1,
    img: travellerIcon,
    count: 80.409,
    desc: "Travellers",
  },
  {
    id: 2,
    img: treasureIcon,
    count: 862,
    desc: "Treasures",
  },
  {
    id: 3,
    img: citiesIcon,
    count: 1.492,
    desc: "Cities",
  },
];

export const itemProductsBig: itemProduct[] = [
  {
    id: 1,
    img: mostPickBig1,
    tittle: "Blue Origin Fams",
    city: "Jakarta, Indonesia",
    special: "$50",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
  {
    id: 2,
    img: mostPickBig2,
    tittle: "The Colony Hotel",
    city: "Miamy, USA",
    special: "$520",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
  {
    id: 3,
    img: mostPickBig3,
    tittle: "Downtown La Proper",
    city: "Los Angeles, USA",
    special: "$320",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
];

export const itemProductSmall: itemProduct[] = [
  {
    id: 1,
    img: mostPick2,
    tittle: "Ocean Land",
    city: "Bandung, Indonesia",
    special: "$22",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
  {
    id: 2,
    img: mostPick3,
    tittle: "Stark House",
    city: "Malang, Indonesia",
    special: "$856",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
  {
    id: 3,
    img: mostPick4,
    tittle: "Vinna Vill",
    city: "Malang, Indonesia",
    special: "$62",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
  {
    id: 4,
    img: mostPick5,
    tittle: "Bobox",
    city: "Medan, Indonesia",
    special: "$72",
    option: "per night",
    description:
      "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
  },
];
