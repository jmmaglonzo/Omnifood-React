import Button from "../UI/Button";
import Customers from "../UI/Customers";
import HeroImg from "../assets/hero/hero-img.webp";
function Hero() {
  return (
    <>
      <section className=" container flex items-center gap-8 py-28" id="hero">
        <article className="flex flex-col items-center space-y-4 lg:items-start">
          <h1 className="text-center text-lg font-bold text-primaryColor dark:text-secondaryColor md:text-3xl lg:text-start xl:text-4xl">
            A healthy meal delivered to your door, every single day!
          </h1>
          <p className="text-center text-sm leading-relaxed dark:text-white md:text-lg lg:text-start">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <div className="mx-auto  flex gap-4 lg:mx-0">
            <Button
              color={`dark:bg-secondaryColor bg-primaryColor text-white text-xs md:text-base`}
            >
              Start eating well!
            </Button>
            <Button color={`bg-white dark:text-black text-xs md:text-base`}>
              Learn more!
            </Button>
          </div>
        </article>

        <img src={HeroImg} alt="Hero" className="hidden lg:block" width={450} />
      </section>
      <Customers />
    </>
  );
}

export default Hero;
