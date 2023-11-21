import "./InputData.module.css";

function InputData(props) {
  return (
    <div className="input_data" onChange={props.onChange}>
      <h3>Ingreso de datos</h3>

      <form className="form" onSubmit={props.onSubmit}>
        <>
          <label htmlFor="circuito">Circuito:</label>
          <select id="circuito" defaultValue={"Seleccione circuito"} required>
            <option value="">--Seleccione circuito--</option>

            {["AG", "PA", "LP", "Personalizado"].map((unidad, key) => (
              <option key={key} value={unidad}>
                {unidad}
              </option>
            ))}
          </select>
        </>

        {props.personalizado ? (
          <>
            <label htmlFor="desc">Descripcion: </label>
            <input
              type="text"
              id="desc"
              placeholder="Ingrese descripcion"
              maxLength="20"
              value={props.customDescr}
              required
            />
          </>
        ) : null}

        <>
          <label htmlFor="potencia">Potencia: </label>
          <input
            type="number"
            id="potencia"
            placeholder="Ingrese potencia"
            step={0.1}
            min={props.minPotencia}
            required
          />
        </>

        <>
          <label htmlFor="unidades">Unidades: </label>
          <select
            id="unidades"
            defaultValue={"Seleccione las unidades"}
            required
          >
            <option value="">--Seleccione las unidades--</option>

            {["VA", "W", "hp", "cv"].map((unidad, key) => (
              <option key={key}>{unidad}</option>
            ))}
          </select>
        </>

        {props.factor ? (
          <>
            <label htmlFor="factor">Factor de potencia: </label>
            <input
              type="number"
              id="factor"
              placeholder="Ingrese factor de potencia"
              step={0.01}
              min={0.01}
              max={1}
              required
            />
          </>
        ) : null}

        {props.personalizado ? (
          <>
            <label htmlFor="fases">Numero de fases: </label>
            <select id="fases">
              {[1, 2, 3].map((fase, key) => (
                <option key={key}>{fase}</option>
              ))}
            </select>
          </>
        ) : null}

        <>
          <label htmlFor="voltaje">Voltaje: </label>
          <select id="voltaje" value={props.valueVoltaje} onChange={() => {}}>
            {props.fasesVoltaje === 1
              ? [120, 123.5, 127].map((f, key) => (
                  <option key={key}>{f}</option>
                ))
              : [208, 214, 220].map((l, key) => <option key={key}>{l}</option>)}
          </select>
        </>

        <>
          <label htmlFor="distancia">Distnacia al tablero: </label>
          <input
            type="number"
            id="distancia"
            placeholder="Ingrese distancia al tablero"
            step={0.1}
            min={0.1}
            required
          />
        </>

        <>
          <button type="submit">Calcular</button>
        </>
      </form>
    </div>
  );
}

export default InputData;
