interface TestimonialProps {
  person: {
    img: string;
    name: string;
    desc: string;
  };
}
function TestimonialCard({ person }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-cards p-4 duration-300 dark:bg-accent dark:text-white md:hover:scale-110">
      <img
        src={person.img}
        alt={person.name}
        className=" h-10 w-10 rounded-full ring-2 ring-white md:h-20 md:w-20"
      />
      <p className="text-xs font-bold leading-relaxed md:text-base">
        {person.name}
      </p>
      <article className="mt-auto text-xs md:text-base">
        <p>{person.desc}</p>
      </article>
    </div>
  );
}

export default TestimonialCard;
