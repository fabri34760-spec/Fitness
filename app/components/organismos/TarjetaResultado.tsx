import Fila from "../moleculas/Fila";
import Fila1 from "../moleculas/Fila1";
import Fila2 from "../moleculas/Fila2";

export default function TarjetaResultado() {
  return (
    <div className="panel-der">
      <h2 className="summary-titulo">Ejercicios</h2>
      <Fila /> 
      <Fila1 /> 
      <Fila2 /> 
    </div>
  );
}