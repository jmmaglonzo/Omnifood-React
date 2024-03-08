import TestimonialCard from "../UI/TestimonialCard";
import { data, gallery } from "../data/custom-data";
function Testimonials() {
  return (
    <section className="mt-20 space-y-8 py-20 text-center" id="testimonials">
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

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {gallery.map((img, index) => (
          <img
            src={img.img}
            key={index}
            alt="Healthy Food"
            className="rounded-md duration-300 md:hover:scale-110"
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
