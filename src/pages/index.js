import { Link, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as StarDB } from "../assets/StarDB.svg";
import styles from "./styles.module.css";

function Pages() {
  const { pathname } = useLocation();

  return (
    <div>
      <div className={styles.header}>
        <Link to="/">
          <StarDB />
        </Link>
        <ul>
          <li className={pathname.includes("/starships") && styles.active}>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Pages;
