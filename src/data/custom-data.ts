type Testimonial = {
  img: string;
  name: string;
  desc: string;
};

import customer1 from "../assets/customers/ben.jpg";
import customer2 from "../assets/customers/dave.jpg";
import customer3 from "../assets/customers/hannah.jpg";
import customer4 from "../assets/customers/steve.jpg";

import gallery1 from "../assets/gallery/gallery-1.jpg";
import gallery2 from "../assets/gallery/gallery-2.jpg";
import gallery3 from "../assets/gallery/gallery-3.jpg";
import gallery4 from "../assets/gallery/gallery-4.jpg";
import gallery5 from "../assets/gallery/gallery-5.jpg";
import gallery6 from "../assets/gallery/gallery-6.jpg";
import gallery7 from "../assets/gallery/gallery-7.jpg";
import gallery8 from "../assets/gallery/gallery-8.jpg";

export const data: Testimonial[] = [
  {
    img: customer1,
    name: "Ben Hadley",
    desc: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
  },
  {
    img: customer2,
    name: "Dave Bryson",
    desc: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
  },
  {
    img: customer3,
    name: "Steve Miller",
    desc: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
  },
  {
    img: customer4,
    name: "Hanna Smith",
    desc: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
  },
];

export const gallery = [
  {
    img: gallery1,
  },
  {
    img: gallery2,
  },
  {
    img: gallery3,
  },
  {
    img: gallery4,
  },
  {
    img: gallery5,
  },
  {
    img: gallery6,
  },
  {
    img: gallery7,
  },
  {
    img: gallery8,
  },
];
