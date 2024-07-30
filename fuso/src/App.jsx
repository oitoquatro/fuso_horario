/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import TimeZoneClock from "./components/TimeZoneClock";

function App() {
  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Los_Angeles",
    "America/Denver",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];
  //determina o fuso local.
  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //adiciona o fuso em uma lista.
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ]);
  const adicionarFusoHorario = (e) => {
    const novoFuso = e.target.value;
    if (!fusosHorariosSelecionados.includes(novoFuso)) {
      setFusosHorariosSelecionados([...fusosHorariosSelecionados, novoFuso]);
    }
  };
  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={(e) => adicionarFusoHorario(e)}>
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>
            {fuso}
          </option>
        ))}
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}
      </div>
    </div>
  );
}

export default App;
