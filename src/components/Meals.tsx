import { useEffect, useState } from "react";
import Cards from "../UI/Cards";
import { useMediaQuery } from "react-responsive";
export type MealProps = {
  id: number;
  image: string;
  title: string;
  diets: string[];
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
};
function Meals() {
  const [recipes, setRecipes] = useState<MealProps[]>([]);
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    } else {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_KEY}&number=12`;
      const getRecipes = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setRecipes(data.recipes);
          localStorage.setItem("recipes", JSON.stringify(data.recipes));
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      };
      getRecipes();
    }
  }, []);

  console.log(recipes);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  const visibleCards = isMobile ? recipes.slice(0, 4) : recipes.slice(0, 12);
  return (
    <section className="mt-24 space-y-4" id="meals">
      <h3 className="text-center text-sm font-semibold uppercase text-white dark:text-secondaryColor md:text-xl">
        meals
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map((recipe) => (
          <Cards key={recipe.id} data={recipe} />
        ))}
      </div>
    </section>
  );
}

export default Meals;
