import React from 'react';

const Lista = ({ data }) => {
  return (
    <div>
      <h2>Section title</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">STOCK</th>
              <th scope="col">FE</th>
              <th scope="col">SALIDAS</th>
              <th scope="col">FS</th>
              <th scope="col">RAZON</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.codigoBarras}</td>
                <td>{item.stock}</td>
                <td>{item.ultimaEntrada}</td>
                <td>{item.totalSalidas}</td>
                <td>{item.ultimaSalida}</td>
                <td>{item.motivoSalida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lista;
