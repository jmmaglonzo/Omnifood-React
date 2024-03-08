import CtaImage from "../assets/cta/food.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

function Cta() {
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // State to track whether the form is currently submitting

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || !form.current) {
      // Prevent multiple submissions or if form is not available
      return;
    }

    setIsSubmitting(true); // Set submitting flag to true

    try {
      await emailjs.sendForm(
        "service_ix17079",
        "template_12lxtb5",
        form.current,
        {
          publicKey: "fJrwUrvJApSOUmizM",
        },
      );
      toast.success("Email sent!");
    } catch (error) {
      toast.error("FAILED...");
    } finally {
      // Reset submitting flag after a delay
      setTimeout(() => {
        setIsSubmitting(false);
      }, 10000); // Adjust the delay time as needed
    }
  };

  return (
    <section className="container mt-20 py-20" id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <Toaster richColors position="top-right" />
        <div className="mx-auto flex flex-col justify-between overflow-hidden rounded-lg bg-primaryColor text-white dark:bg-secondaryColor lg:flex-row ">
          <div className="order-2 flex flex-col justify-center gap-2 p-4 md:order-1 md:gap-8 lg:w-1/3">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="inputs"
                placeholder="Enter your Name"
                name="user_name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="inputs"
                placeholder="Enter your Email"
                name="user_email"
                required
              />
            </div>
            <div>
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                className="inputs"
                placeholder="Contact Number"
                name="user_contact"
                max={11}
                required
              />
            </div>
            <div className="">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="inputs"
                rows={3}
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="block rounded-lg bg-secondaryColor py-2 font-semibold dark:bg-primaryColor md:hidden"
              disabled={isSubmitting}
            >
              "Sign up Now!"
            </button>
          </div>

          <div className="order-1 flex flex-col space-y-8 p-4 text-center md:order-2 lg:w-1/3 lg:text-start">
            <article className="space-y-4">
              <h3 className="text-base font-bold md:text-2xl">
                Get your first meal for free
              </h3>
              <p className="text-sm leading-relaxed md:text-base">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
            </article>

            <article className="space-y-4 text-center lg:text-start">
              <span className="flex items-center justify-center gap-2 text-base font-bold md:text-xl lg:justify-start">
                <BsFillTelephoneFill className="text-2xl" />
                Contact Us!
              </span>
              <div className="space-y-2 text-sm md:text-base">
                <p>623 Harrison St., 2nd Floor, San Francisco, CA 9410</p>
                <p># 415-201-6370</p>
                <p>hello@omnifood.com</p>
              </div>
            </article>
            <button
              type="submit"
              className="hidden cursor-pointer rounded-lg bg-secondaryColor py-2 font-semibold duration-300 active:translate-x-2 active:translate-y-2 dark:bg-primaryColor md:block"
              disabled={isSubmitting}
            >
              Sign up Now!
            </button>
          </div>
          <div className="order-3 hidden h-auto w-[350px] lg:block">
            <img src={CtaImage} alt="Food" className="h-full w-full" />
          </div>
        </div>
      </form>
    </section>
  );
}
export default Cta;
