import PanelResultado from "../organismos/PanelResultado";
import PanelSummary from "../organismos/PanelSummary";

export default function TarjetaResultado() {
  return (
    <div className="card">
      <PanelResultado />
      <PanelSummary />
    </div>
  );
}