import FilaCategoria from "../atomos/FilaCategoria";
import Boton from "../atomos/Boton";

export default function PanelSummary() {
  return (
    <div className="panel-der">
      <h2 className="summary-titulo">Summary</h2>
      <FilaCategoria nombre="Reaction" puntaje={80} color="hsl(0,100%,67%)" fondo="hsl(0,100%,97%)" />
      <FilaCategoria nombre="Memory" puntaje={92} color="hsl(39,100%,56%)" fondo="hsl(39,100%,97%)" />
      <FilaCategoria nombre="Verbal" puntaje={61} color="hsl(166,100%,37%)" fondo="hsl(166,100%,97%)" />
      <FilaCategoria nombre="Visual" puntaje={72} color="hsl(234,85%,45%)" fondo="hsl(234,85%,97%)" />
      <Boton />
    </div>
  );
}