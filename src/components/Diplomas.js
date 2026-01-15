import {Outlet, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import {getDiplomas} from "../api";
import { toggleFavourite, isFavourite, getFavourites } from "../utils/favourites";
import Toast from "../components/FavMessage";
export default function Diplomas() {
  const diplomas = getDiplomas()
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [favMessages, setFavMessages] = useState([]);

    useEffect(() => {
    setFavourites(getFavourites());
  }, []);

   const filteredDiplomas =
    searchTerm.trim() === ""
      ? diplomas
      : diplomas.filter(diploma =>
          `${diploma.name} ${diploma.code}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

    const handleFavourite = (id, name,code) => {
  
    if (!favourites.includes(id)) {
      const updated = toggleFavourite(id);
      setFavourites(updated);

      setFavMessages(prev => [
        ...prev,
        { id, message: `[${code}] ${name} is added to your favourite courses`, link: "/favourites" }
      ]);
    }
  };

  return (
    <div className="container">
      <h1>Full-time Courses</h1>

      <label>
        Search Course:
        <input
          type="text"
          placeholder="Search by diploma name or code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      <ul className="diplomas">
        {filteredDiplomas.length > 0 ? (
          filteredDiplomas.map(diploma => (
            <li key={diploma.id}>
              <NavLink
                to={diploma.id}
                className={({ isActive }) =>
                  isActive ? "diploma-active" : null
                }
              >
                [{diploma.code}] <br />
                {diploma.name}
              </NavLink> <br></br> <br></br>
              <button
                className="fav-btn"
                disabled={favourites.includes(diploma.id)} 
                onClick={() => handleFavourite(diploma.id, diploma.name, diploma.code)}
              >
                {favourites.includes(diploma.id) ? "★ Added to Favourites" : "☆ Add Favourite"}
              </button>
              
            </li>
          ))
        ) : (
          <p>No matching courses found.</p>
        )}
      </ul>
      {favMessages.map(msg => (
        <Toast key={msg.id} message={msg.message} link={msg.link} />
      ))}
      <Outlet />
    </div>
  );
}
