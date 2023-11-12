import React, { useState, useEffect } from 'react';
import mapIcon from './assets/mapa.png'

const Navbar = ({ setPagina }) => {
    const [dateTime, setDateTime] = useState(obtenerFechaYHoraActual);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setDateTime(obtenerFechaYHoraActual());
        }, 1000);

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, []); // El segundo argumento vacío asegura que el efecto se ejecute solo una vez al montar el componente

    // Función para obtener la fecha y hora actual en formato local
    function obtenerFechaYHoraActual() {
        const ahora = new Date();
        return ahora.toLocaleString();
    }

    function cambia() {

    }
    return (
        <div>
            <aside>
                <div className="navHContainer">
                    <div className="navP"> Bs </div>
                    <div onClick={()=>{
                        setPagina(null)}}
                    className="navPi"> BabyStock
                    </div>
                </div>

                <div className="navContainer">
                    <div onClick={() => setPagina(1)} className="navCat">
                        <h4 className="navText">Sucursal Centro</h4>
                    </div>
                    <div onClick={() => setPagina(2)} className="navCat">
                        <h4 className="navText">Sucursal Tecnologico</h4>
                    </div>
                    <div onClick={() => setPagina(3)} className="navCat">
                        <h4 className="navText">Sucursal Universidad</h4>
                    </div>
                    <div onClick={() => setPagina(4)} className="navCat">
                        <h4 className="navText">Sucursal Cuauhtemoc</h4>
                    </div>
                    <div onClick={() => setPagina(5)} className="navCat">
                        <h4 className="navText">Sucursal Delicias</h4>
                    </div>

                </div>
            </aside>

            <header className="bsHr">
                <div className="headerItem" id="hrImgContainer">
                    <img id="hrImg" src={mapIcon} alt="Place" />
                </div>
                <div className="headerItem"> Sucursal Centro </div>
                <div className="headerTable">
                    <div className="headerItem" id="hiOwner"> Adan Salazar (Administrador) </div>
                    <div className="headerItem" id="hiOwner">{dateTime}</div>
                </div>

            </header>
        </div>
    );
};

export default Navbar;