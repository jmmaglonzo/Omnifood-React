import app1 from "../assets/app/app-screen-1.webp";
import app2 from "../assets/app/app-screen-2.webp";
import app3 from "../assets/app/app-screen-3.webp";
function HowItWorks() {
  return (
    <section className="mt-20 space-y-4 " id="how">
      <h3 className=" text-center text-sm font-semibold uppercase text-white dark:text-secondaryColor md:text-start md:text-xl">
        how it works
      </h3>
      <h2 className="text-center font-bold dark:text-white md:text-start md:text-4xl">
        Your daily dose of health in 3 simple steps!
      </h2>
      <div className="flex flex-col items-center space-y-24">
        <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          <article className="order-2 space-y-4 md:order-1 md:w-1/2 ">
            <span className="text-6xl  font-bold text-primaryColor opacity-40  dark:text-secondaryColor md:text-8xl">
              01
            </span>
            <p className="text-2xl font-semibold dark:text-white md:text-3xl">
              Tell us what you like (and what not).
            </p>
            <p className="leading-relaxed dark:text-white md:text-xl">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </article>
          <figure className="order-1 w-1/2 md:order-2 md:w-auto">
            <img src={app1} alt="" width={300} />
          </figure>
        </div>
        {/*  */}
        <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          <article className="order-2 space-y-4 md:order-2 md:w-1/2 ">
            <span className="text-6xl  font-bold text-primaryColor opacity-40  dark:text-secondaryColor md:text-8xl">
              02
            </span>
            <p className="text-2xl font-semibold dark:text-white md:text-3xl">
              Approve your weekly meal plan.
            </p>
            <p className="leading-relaxed dark:text-white md:text-xl">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </article>
          <figure className="order-1 w-1/2 md:order-1 md:w-auto">
            <img src={app2} alt="" width={300} />
          </figure>
        </div>
        {/*  */}
        <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          <article className="order-2 space-y-4 md:order-1 md:w-1/2 ">
            <span className="text-6xl  font-bold text-primaryColor opacity-40  dark:text-secondaryColor md:text-8xl">
              03
            </span>
            <p className="text-2xl font-semibold dark:text-white md:text-3xl">
              Receive meals at convenient time.
            </p>
            <p className="leading-relaxed dark:text-white md:text-xl">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </article>
          <figure className="order-1 w-1/2 md:order-2 md:w-auto">
            <img src={app3} alt="" width={300} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
