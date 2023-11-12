import React, { useState } from 'react'
import Navbar from './Navbar'
import Sucursal from './Sucursal'
import Menu from './Menu'
import './App.css'

function App() {
  const [pagina, setPagina] = useState(0);

  return (
    <div className='principal'>
      <Navbar setPagina={setPagina} />
      <div style={{ width: '92%', paddingLeft: '4%', paddingRight: '4%', paddingTop: '2%', paddingBottom: '2%;' }}>
        {!pagina && <Menu/>}
        {pagina == 1 && <Sucursal indice='1' texto='Sucursal Centro' />}
        {pagina == 2 && <Sucursal indice='2' texto='Sucursal Tecnológico'/>}
        {pagina == 3 && <Sucursal indice='3' texto='Sucursal Universidad'/>}
        {pagina == 4 && <Sucursal indice='4' texto='Sucursal Cuahtemoc'/>}
        {pagina == 5 && <Sucursal indice='5' texto='Sucursal Delicias'/>}
      </div>
    </div>
  )
}

export default App
