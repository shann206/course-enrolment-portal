import { Outlet, NavLink } from "react-router-dom";
import {getDiplomas} from "../data"
import { useState } from "react";

export default function Diplomas() {
  const diplomas = getDiplomas();
  const [searchText, setSearchText] = useState("");

  const filteredDiplomas = diplomas.filter(diploma =>
    diploma.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Schools</h1>

        <input className="search-input" placeholder="Search Diplomas..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      <ul className="categories">
        {filteredDiplomas.map(cat => (
          <li key={cat.id}>
            <NavLink
            className={({ isActive }) =>
              isActive ? "category-active" : null 
          }
            to={cat.id}
            >
              {cat.name}
              </NavLink>
            </li>
        ))}
      </ul>

      <Outlet /> 
    </div>
  );
}
