import Descripcion1 from "../atomos/Descripcion1";
import Flecha1 from "../atomos/Flecha1";

export default function Fila1() {
  return (
    <div className="fila">
      <div className="fila__info">
        <Descripcion1 />
      </div>
      <Flecha1 />
    </div>
  );
}