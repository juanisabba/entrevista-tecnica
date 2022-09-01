import React, { useState } from "react";
import { Link } from "react-router-dom";

function Bingo() 
    //Ver el código funcionando en: https://entrevista-juan-sabbatini.netlify.app/
  let column1 = [];
  let column2 = [];
  let column3 = [];
  let column4 = [];
  let column5 = [];
  let column6 = [];
  let column7 = [];
  let column8 = [];
  let column9 = [];

  let row1 = [];
  let row2 = [];
  let row3 = [];
  //Espacios vacios: 4 por fila y espacios llenos: 5 por fila 
  let emptySpacesRow1 = 0;
  let filledSpacesRow1 = 0;
  let emptySpacesRow2 = 0;
  let filledSpacesRow2 = 0;
  let emptySpacesRow3 = 0;
  let filledSpacesRow3 = 0;

  //Elegir aleatoriamente que casilleros van a estar ocupados
  for (let i = 0; i < 9; i++) {
    if (filledSpacesRow1 === 5) {
      row1.push(0);
    } else if (emptySpacesRow1 === 4) {
      row1.push(1);
    } else {
      const randomNumber = Math.random();
      if (randomNumber > 0.444444) {
        row1.push(1);
        filledSpacesRow1 += 1;
      } else {
        row1.push(0);
        emptySpacesRow1 += 1;
      }
    }
    if (filledSpacesRow2 === 5) {
      row2.push(0);
    } else if (emptySpacesRow2 === 4) {
      row2.push(1);
    } else {
      const randomNumber = Math.random();
      if (randomNumber > 0.444444) {
        row2.push(1);
        filledSpacesRow2 += 1;
      } else {
        row2.push(0);
        emptySpacesRow2 += 1;
      }
    }
    if (row1[i] === 1 && row2[i] === 1) {
      row3.push(0);
      emptySpacesRow3 += 1;
    } else if (row1[i] === 0 && row2[i] === 0) {
      row3.push(1);
      filledSpacesRow3 += 1;
    } else if (filledSpacesRow3 === 5) {
      row3.push(0);
      emptySpacesRow3 += 1;
    } else if (emptySpacesRow3 === 4) {
      row3.push(1);
      filledSpacesRow3 += 1;
    } else {
      const randomNumber = Math.random();
      if (randomNumber > 0.3333) {
        row3.push(1);
        filledSpacesRow3 += 1;
      } else {
        row3.push(0);
        emptySpacesRow3 += 1;
      }
    }
  }

  //Se eligen numeros aleatorios para los casilleros que van a estar ocupados

  //Columna 1
  if (row1[0] === 1) column1.push(Math.floor(Math.random() * 9 + 1));
  else column1.push(0);

  if (row2[0] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 9 + 1);
    } while (column1.includes(randomNumber));
    column1.push(randomNumber);
  } else column1.push(0);

  if (row3[0] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 9 + 1);
    } while (column1.includes(randomNumber));
    column1.push(randomNumber);
  } else column1.push(0);

  //Columna 2
  if (row1[1] === 1) column2.push(Math.floor(Math.random() * 10 + 10));
  else column2.push(0);

  if (row2[1] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 10);
    } while (column2.includes(randomNumber));
    column2.push(randomNumber);
  } else column2.push(0);

  if (row3[1] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 10);
    } while (column2.includes(randomNumber));
    column2.push(randomNumber);
  } else column2.push(0);

  //Columna 3
  if (row1[2] === 1) column3.push(Math.floor(Math.random() * 10 + 20));
  else column3.push(0);

  if (row2[2] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 20);
    } while (column3.includes(randomNumber));
    column3.push(randomNumber);
  } else column3.push(0);

  if (row3[2] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 20);
    } while (column3.includes(randomNumber));
    column3.push(randomNumber);
  } else column3.push(0);

  //Columna 4
  if (row1[3] === 1) column4.push(Math.floor(Math.random() * 10 + 30));
  else column4.push(0);

  if (row2[3] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 30);
    } while (column4.includes(randomNumber));
    column4.push(randomNumber);
  } else column4.push(0);

  if (row3[3] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 30);
    } while (column4.includes(randomNumber));
    column4.push(randomNumber);
  } else column4.push(0);

  //Columna 5
  if (row1[4] === 1) column5.push(Math.floor(Math.random() * 10 + 40));
  else column5.push(0);

  if (row2[4] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 40);
    } while (column5.includes(randomNumber));
    column5.push(randomNumber);
  } else column5.push(0);

  if (row3[4] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 40);
    } while (column5.includes(randomNumber));
    column5.push(randomNumber);
  } else column5.push(0);

  //Columna 6
  if (row1[5] === 1) column6.push(Math.floor(Math.random() * 10 + 50));
  else column6.push(0);

  if (row2[5] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 50);
    } while (column6.includes(randomNumber));
    column6.push(randomNumber);
  } else column6.push(0);

  if (row3[5] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 50);
    } while (column6.includes(randomNumber));
    column6.push(randomNumber);
  } else column6.push(0);

  //Columna 7
  if (row1[6] === 1) column7.push(Math.floor(Math.random() * 10 + 60));
  else column7.push(0);

  if (row2[6] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 60);
    } while (column7.includes(randomNumber));
    column7.push(randomNumber);
  } else column7.push(0);

  if (row3[6] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 60);
    } while (column7.includes(randomNumber));
    column7.push(randomNumber);
  } else column7.push(0);

  //Columna 8
  if (row1[7] === 1) column8.push(Math.floor(Math.random() * 10 + 70));
  else column8.push(0);

  if (row2[7] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 70);
    } while (column8.includes(randomNumber));
    column8.push(randomNumber);
  } else column8.push(0);

  if (row3[7] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10 + 70);
    } while (column8.includes(randomNumber));
    column8.push(randomNumber);
  } else column8.push(0);

  //Columna 9
  if (row1[8] === 1) column9.push(Math.floor(Math.random() * 11 + 80));
  else column9.push(0);

  if (row2[8] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 11 + 80);
    } while (column9.includes(randomNumber));
    column9.push(randomNumber);
  } else column9.push(0);

  if (row3[8] === 1) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 11 + 80);
    } while (column9.includes(randomNumber));
    column9.push(randomNumber);
  } else column8.push(0);

  //     if (filledSpacesRow3 < 5) {
  //     for (let i = 0; i < 9; i++) {
  //       do {
  //         if ((row1[i] === 0 || row2[i] === 0) && row3[i] === 0) {
  //           row3[i] = 1;
  //           emptySpacesRow3 -= 1;
  //           filledSpacesRow3 += 1;
  //         }
  //       } while (filledSpacesRow3 < 5);
  //     }
  //   }

  //   if (filledSpacesRow3 > 5) {
  //     for (let i = 0; i < 9; i++) {
  //       do {
  //         if ((row1[i] === 1 || row2[i] === 1) && row3[i] === 1) {
  //           row3[i] = 0;
  //           emptySpacesRow3 += 1;
  //           filledSpacesRow3 -= 1;
  //         }
  //       } while (filledSpacesRow3 > 5);
  //     }
  //   }
  const [newCarton, setNewCarton] = useState(0);

  // Función para generar nuevos tableros aleaorios
  const handleClick = () => {
    setNewCarton(newCarton + 1);
  };

  if (column8.length === 4) column8.pop();
  if (column9.length === 2) column9.push(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <Link to="/form">
        <button style={{ marginBottom: 50 }}>Ir al Formulario</button>
      </Link>

      <button onClick={handleClick} style={{ marginBottom: 20 }}>
        Click aquí para generar un nuevo cartón aleatorio
      </button>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column1 &&
            column1.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column2 &&
            column2.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column3 &&
            column3.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column4 &&
            column4.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column5 &&
            column5.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column6 &&
            column6.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column7 &&
            column7.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column8 &&
            column8.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
        <div
          style={{
            background: "rgba(0,0,0,.2)",
            width: 50,
            textAlign: "center",
          }}
        >
          {column9 &&
            column9.map((number, index) => (
              <div
                key={index}
                style={{
                  padding: "10 0",
                  fontSize: 23,
                  border: "1px solid rgba(0,0,0,.1)",
                }}
              >
                {number !== 0 ? number : "-"}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Bingo;
