import "./Tabla.css";

function Tabla(props) {
  const headed = [
    "Descripcion",
    "Carga",
    "Voltaje",
    "Corriente",
    "PTM",
    "Fases",
    "DT",
    "F",
    "N",
    "T",
    "CT",
    "PVC",
    "EMT",
    "Hilos",
  ];

  return (
    <div className="tabla_container">
      <h3>Cuadro de cargas</h3>
      <table className="tabla">
        <thead>
          <tr>
            {headed.map((th, key) => (
              <th key={key}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.trows.map((tr, key) => (
            <tr key={key}>
              {tr.map((td, key) => (
                <td key={key}>{td}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
