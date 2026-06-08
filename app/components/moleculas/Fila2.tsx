import Descripcion2 from "../atomos/Descripcion2";
import Flecha2 from "../atomos/Flecha2";

export default function Fila2() {
  return (
    <div className="fila">
      <div className="fila__info">
        <Descripcion2 />
      </div>
      <Flecha2 />
    </div>
  );
}