import customer1 from "../assets/customers/customer-1.jpg";
import customer2 from "../assets/customers/customer-2.jpg";
import customer3 from "../assets/customers/customer-3.jpg";
import customer5 from "../assets/customers/customer-4.jpg";
import customer4 from "../assets/customers/customer-5.jpg";
import customer6 from "../assets/customers/customer-6.jpg";

function Customers() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <figure className="flex items-center ">
        <img
          src={customer1}
          alt="Customers profile"
          className="-mr-2 h-10 w-10 rounded-full ring-4 ring-white"
        />
        <img
          src={customer2}
          alt="Customers profile"
          className="-mr-2 h-10 w-10 rounded-full ring-4 ring-white"
        />
        <img
          src={customer3}
          alt="Customers profile"
          className="-mr-2 h-10 w-10 rounded-full ring-4 ring-white"
        />
        <img
          src={customer4}
          alt="Customers profile"
          className="-mr-2 h-10 w-10 rounded-full ring-4 ring-white"
        />
        <img
          src={customer5}
          alt="Customers profile"
          className="-mr-2 h-10 w-10 rounded-full ring-4 ring-white"
        />
        <img
          src={customer6}
          alt="Customers profile"
          className="-mr-2 h-10 w-10 rounded-full ring-4 ring-white"
        />
      </figure>

      <p className="font-bold text-primaryColor dark:text-secondaryColor">
        250,000+{" "}
        <span className="font-semibold text-black dark:text-white">
          meals delivered last year
        </span>
      </p>
    </div>
  );
}

export default Customers;
