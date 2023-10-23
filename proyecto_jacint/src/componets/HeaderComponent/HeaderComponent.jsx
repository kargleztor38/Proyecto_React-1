import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { NavBar } from "../NavBar/NavBar";
import "./headerComponent.css";

export const HeaderComponent = () => {
  return (
    <header className="headerComponent">
      <NavBar />
      <ItemListContainer titulo={'¡Bienvenidos a Jacint Ilusión!'} subtitulo={'¡Tu destino para camisetas artesanales únicas y llenas de magia!'} />
    </header>
  );
};
