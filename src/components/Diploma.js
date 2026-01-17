import { Outlet, useParams, NavLink } from "react-router-dom";
import { getDiploma } from "../data";

export default function Diploma() {
  const { diplomaId } = useParams(); 
  const diploma = getDiploma(diplomaId);
  return (
    <>
      <h2>{diploma.name}</h2>

      <ul className="session-list">
        {diploma.modules.map( module => 
        <li className="session" key={module.id}>
          <NavLink 
          className={({ isActive }) => isActive ? "session-active" : null}
          to={module.id}>
          <p className="session-name">{module.name}</p>
          </NavLink>
        </li>
        )}
      </ul>
      <Outlet />
    </>
  );
}
