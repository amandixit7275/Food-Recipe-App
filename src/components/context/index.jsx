const { createContext, useState } = require("react");

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouriteList] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavouritesList.push(getCurrentItem);
    } else {
      cpyFavouritesList.splice(index);
    }
    setFavouriteList(cpyFavouritesList);
  }
  console.log(favouritesList, "favourite list");
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        loading,
        recipeList,
        setSearchParams,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourite,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
