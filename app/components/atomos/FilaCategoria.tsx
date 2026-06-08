interface Props {
  nombre: string;
  puntaje: number;
  color: string;
  fondo: string;
}

export default function FilaCategoria({ nombre, puntaje, color, fondo }: Props) {
  return (
    <div className="categoria" style={{background: fondo}}>
      <span style={{color: color, fontWeight: "600"}}>{nombre}</span>
      <span><strong>{puntaje}</strong> / 100</span>
    </div>
  );
}