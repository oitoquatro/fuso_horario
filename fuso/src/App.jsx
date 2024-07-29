/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import TimeZoneClock from "./components/TimeZoneClock";

function App() {
  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_Iork",
    "America/Chicago",
    "America/Los Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokio",
  ];
  //determina o fuso local.
  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //adiciona o fuso em uma lista.
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ]);
  console.log(fusoHorarioLocal);

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select>
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso}/>
        ))}
      </div>
    </div>
  );
}

export default App;
