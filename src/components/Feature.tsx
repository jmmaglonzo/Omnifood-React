import { FaInfinity, FaRecycle, FaPause } from "react-icons/fa6";
import { BiLeaf } from "react-icons/bi";

function Feature() {
  return (
    <section className=" w-full bg-primaryColor p-8 dark:bg-accent">
      <div className="container grid grid-cols-1 gap-8 text-white md:grid-cols-2 lg:grid-cols-4 ">
        <div className="flex flex-col items-center space-y-2 text-center lg:items-start lg:text-start">
          <FaInfinity className="h-16 w-16 text-secondaryColor" />
          <span className="font-bold text-white dark:text-primaryColor lg:text-xl">
            Never cook again!
          </span>
          <p>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center lg:items-start lg:text-start ">
          <BiLeaf className="h-16 w-16 text-secondaryColor" />
          <span className="font-bold text-white dark:text-primaryColor lg:text-xl">
            Local and organic
          </span>
          <p>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>

        <div className="flex flex-col  items-center space-y-2 text-center lg:items-start lg:text-start">
          <FaRecycle className="h-16 w-16 text-secondaryColor" />
          <span className="font-bold text-white dark:text-primaryColor lg:text-xl">
            No waste
          </span>
          <p>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center lg:items-start lg:text-start ">
          <FaPause className="h-16 w-16 text-secondaryColor" />
          <span className="font-bold text-white dark:text-primaryColor lg:text-xl">
            Pause anytime
          </span>
          <p>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
