import TestimonialCard from "../UI/TestimonialCard";
import customer1 from "../assets/customers/ben.jpg";
import customer2 from "../assets/customers/dave.jpg";
import customer3 from "../assets/customers/hannah.jpg";
import customer4 from "../assets/customers/steve.jpg";

type Testimonial = {
  img: string;
  name: string;
  desc: string;
};

function Testimonials() {
  const data: Testimonial[] = [
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

  return (
    <section className="mt-20 space-y-8 text-center">
      <span className="text-base font-semibold uppercase text-primaryColor dark:text-secondaryColor md:text-xl ">
        testimonials
      </span>
      <h3 className="text-xl font-bold dark:text-white md:text-4xl">
        Once you try it, you can't go back
      </h3>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
        {data.map((person, index) => (
          <TestimonialCard key={index} person={person} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
