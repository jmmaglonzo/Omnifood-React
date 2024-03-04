import Button from "../UI/Button";
import Customers from "../UI/Customers";
import HeroImg from "../assets/hero/hero-img.webp";
function Hero() {
  return (
    <>
      <section className=" container flex items-center gap-8 py-28">
        <article className="flex flex-col space-y-4 md:items-start">
          <h1 className=" text-center text-3xl font-bold text-primaryColor dark:text-secondaryColor lg:text-start lg:text-3xl xl:text-5xl">
            A healthy meal delivered to your door, every single day!
          </h1>
          <p className="text-center text-base leading-relaxed dark:text-white md:text-lg lg:text-start">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <div className="mx-auto  flex gap-4 lg:mx-0">
            <Button color={`dark:bg-secondaryColor bg-primaryColor text-white`}>
              Start eating well!
            </Button>
            <Button color={`bg-white dark:text-black`}>Learn more!</Button>
          </div>
        </article>

        <img src={HeroImg} alt="Hero" className="hidden lg:block" width={450} />
      </section>
      <Customers />
    </>
  );
}

export default Hero;
