import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <h2 className="navLogo">mi tienda</h2>
      <ul className="navMenu">
        <li>
          <a href="#">inicio</a>
        </li>
        <li>
          <a href="#">producto del autor</a>
        </li>
        <li>
          <a href="#">productos mas populares</a>
        </li>
        <li>
          <a href="#">otros productos</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
