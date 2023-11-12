import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from "recharts";

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

  const COLORS = ['#fafa6e', '#d7f171', '#b5e877', '##95dd7d', '#77d183'];

  return (
    <>
      <h2>Stock del Producto {idProducto}</h2>
      <ul>
        {stockData.map((sucursal, index) => (
          <li key={index}>
            {sucursal.sucursal}: {sucursal.stock}
          </li>
        ))}
      </ul>

      {/* Integrar el gráfico de pizza con los datos obtenidos */}
      <PieChart width={400} height={400}>
        <Pie
          data={stockData}
          dataKey="stock"  // Asegúrate de que esto coincida con el nombre de la propiedad en tu objeto de datos
          nameKey="sucursal"  // Asegúrate de que esto coincida con el nombre de la propiedad en tu objeto de datos
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {stockData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default StockComponent;
