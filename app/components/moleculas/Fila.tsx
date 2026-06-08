import Descripcion from "../atomos/Descripcion";
import Flecha from "../atomos/Flecha";

export default function Fila() {
  return (
    <div className="fila">
      <div className="fila__info">
        <Descripcion />
      </div>
      <Flecha />
    </div>
  );
}