import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../recipe-item";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  console.log(recipeList);

  if (loading) {
    <h2>Please wait ! Loading...</h2>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => {
          return <RecipeItem item={item} />;
        })
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            {" "}
            Nothing to show. Please search something{" "}
          </p>{" "}
        </div>
      )}
    </div>
  );
}
