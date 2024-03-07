import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { PiBowlFood } from "react-icons/pi";

export type CardsProps = {
  data: {
    image: string;
    title: string;
    diets: string[];
    pricePerServing: number;
    readyInMinutes: number;
    servings: number;
  };
};

function Cards({ data }: CardsProps) {
  function getRandomColor(): string {
    const color = "hsl(" + Math.random() * 360 + ", 60%, 40%)";
    return color;
  }
  const { diets, image, title, pricePerServing, readyInMinutes, servings } =
    data;
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-cards shadow-lg dark:bg-accent">
      <header>
        <img src={image} alt={title} />
        <p className="mt-4 text-center text-xs font-bold text-primaryColor dark:text-secondaryColor">
          {data.title}
        </p>
      </header>
      <ul className="description flex flex-wrap items-center justify-center gap-4 p-4 text-xs font-semibold capitalize text-white">
        {diets.length === 0 ? (
          <li
            className="rounded-full p-2"
            style={{ backgroundColor: getRandomColor() }}
          >
            No data Availabe
          </li>
        ) : (
          diets.map((diet, index) => (
            <li
              key={index}
              style={{ backgroundColor: getRandomColor() }}
              className="rounded-full p-2"
            >
              {diet}
            </li>
          ))
        )}
      </ul>

      <div className=" mt-auto flex flex-wrap justify-center gap-2 pb-4 text-[0.6rem] font-semibold capitalize dark:text-white">
        <span className="flex items-center gap-2">
          <MdOutlineTimer size={20} className="text-primaryColor" />
          ready in {readyInMinutes} minutes
        </span>
        <span className="flex items-center gap-2">
          <AiOutlineDollar size={20} className="text-primaryColor" />$
          {(pricePerServing / 100).toFixed(2)}
        </span>
        <span className="flex items-center gap-2">
          <PiBowlFood size={20} className="text-primaryColor" />
          {servings} servings
        </span>
      </div>
    </div>
  );
}

export default Cards;
