import React, { useState, useEffect } from 'react';

const StockComponent = ({ idProducto }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const obtenerDatosStock = async () => {
      try {
        const response = await fetch(`https://babystock-2-dev-anmg.3.us-1.fl0.io/inventario/stock/${idProducto}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos del inventario');
        }
        
        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error(error);
        // Manejo de errores aquí
      }
    };

    obtenerDatosStock();
  }, [idProducto]);

  return (
    <div>
      <h2>Stock del Producto {idProducto}</h2>
      <ul>
        {stockData.map((sucursal, index) => (
          <li key={index}>
            {sucursal.sucursal}: {sucursal.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockComponent;