import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getDiplomas } from "../api";
import { getFavourites, toggleFavourite, isFavourite } from "../utils/favourites";

export default function Favourites() {
  const diplomas = getDiplomas();
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(getFavourites());
  }, []);

  const handleFavourite = (id) => {
    const updated = toggleFavourite(id);
    setFavs(updated);
  };

  const favDiplomas = diplomas.filter(d => favs.includes(d.id));

  return (
    <div className="container">
      <h1>My Favourite Courses</h1>

      {favDiplomas.length === 0 ? (
        <p>No favourite courses yet.</p>
      ) : (
        favDiplomas.map(diploma => (
          <div key={diploma.id} className="diploma-item">
            <NavLink to={`/diplomas/${diploma.id}`} style={{ marginRight: "10px" }}>
              [{diploma.code}] {diploma.name} 
            </NavLink>
            <button onClick={() => handleFavourite(diploma.id)}>
              {isFavourite(diploma.id) ? "★ Unfavourite" : "☆ Add Favourite"}
            </button> <br></br> <br></br> <br></br>
          </div>
        ))
      )}
      <Outlet />
    </div>
  );
}