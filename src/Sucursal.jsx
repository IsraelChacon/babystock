import React, { useState, useEffect } from 'react';
import Lista from './Lista';
import Grafica from './grafica';
import { fetchDataById } from './helpers/helperDB';
import Chatbox from './Chatbox';
function Sucursal({ indice },{ sucursal }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataById(indice);
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [indice]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  const handleButtonClick = () => {
    // Lógica que quieres ejecutar al hacer clic en el botón
    console.log('Botón clickeado');
    // Puedes agregar más lógica aquí según tus necesidades
  };

  return (
    <>
  <div className="table-container">
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>
      {
         indice == 1 ? "Sucursal Centro" : indice == 2 ? "Sucursal Tecnológico" : indice == 3 ? "Sucursal Universidad" : indice == 4 ? "Sucursal Cuauhtemoc" : indice == 5  ? "Sucursal Delicias" : "Quien sabe"
      }
      </h1>
      <button className="button" type="button" onClick={handleButtonClick}>
        <img
          className="hrImg"
          src="./src/assets/question.png"
          alt="Info"
        />
      </button>
    </div>
    <div className="table">
      <Lista data={data} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>¿QUE PRODUCTO SE ESTÁ VENDIENDO MENOS?</p>
      <p>Open ia</p>
      <button className="panelImg button" type="button" onClick={handleButtonClick}>
        <img
          className="hrImg"
          src="./src/assets/question.png"
          alt="Info"
        />
      </button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>Sotck de producto</p>
      <Grafica />
      <Chatbox />
    </div>
  </div>
</>
    
  );
}

export default Sucursal;
