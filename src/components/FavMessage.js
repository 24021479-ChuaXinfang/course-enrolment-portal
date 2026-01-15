import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FavMessage({ message, link, duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fav-message">
      {message} <Link to={link}>View Favourite Course List</Link>
    </div>
  );
}