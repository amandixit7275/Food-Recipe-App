import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-col gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParams}
          onChange={(event) => {
            setSearchParams(event.target.value);
          }}
          name="search"
          placeholder="Enter items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red 200"
        />
      </form>
      <li>
        <NavLink
          to={"./home"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"./favourites"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Favourite
        </NavLink>
      </li>
    </nav>
  );
}
