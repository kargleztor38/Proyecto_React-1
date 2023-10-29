import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <h2 className="navLogo">mi tienda</h2>

      <button>inicio</button>
      <button>producto del autor</button>
      <button>productos mas populares</button>
      <button>otros productos</button>

      <CartWidget />
    </nav>
  );
};
