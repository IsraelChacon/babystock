import React, { useState, useEffect } from 'react';
import imageSucursal from './assets/farmacy.png';
import imageQuestion from './assets/question.png';
import Chatbox from './Chatbox';
import Grafica from './grafica';
import { realizarSolicitudFetch } from './helpers/helperAI';

const Menu = () => {
  const [botMessage, setBotMessage] = useState('a');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://api.respell.ai/v1/run';
        const metodo = 'POST';
        const datos = {
          spellId: 'O4LCLi1ZEJ9gc45XgprVZ',
          spellVersionId: 'kkn0yyUKh7n5qUzu6Kj5V',
          inputs: {
            input_3: "Dime la situación más crítica de las sucursales para reabastecimiento",
          },
        };

        const resultado = await realizarSolicitudFetch(url, metodo, datos);
        setBotMessage(resultado.outputs.output);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData(); // Llamada a la función al montar el componente
  }, []); // El segundo argumento [] significa que este efecto se ejecutará solo una vez después de la renderización inicial

  return (
    <>
      <>
            <div className="panelBody">
                <div className="panel panelFlex">
                    <div className="panelItem">
                        <div className="panelHeader">

                            <div className="panelTitle">
                                Sucursales
                            </div>

                            <div className="panelImg">
                                <img id="hrImg" src={imageQuestion} alt="Question" />
                            </div>

                        </div>

                        <div className="panelComponent" id="x">
                            <div className="panelCard2">
                                <div className="panelCardTitle">BAJA</div>
                                <div><img id="hrImg2" src={imageSucursal} alt="Sucursal"/> </div>
                                <div id="panelCardBottom">TECNOLOGICO</div>
                            </div>
                            <div className="panelCard2">
                                <div className="panelCardTitle">MEDIA</div>
                                <div><img id="hrImg2" src={imageSucursal} alt="Sucursal"/> </div>
                                <div id="panelCardBottom">CUAHTEMOC</div>
                            </div>
                        </div>
                        <div className="panelComponent" id="x">
                            <div className="panelCard2">
                                <div className="panelCardTitle">ALTA</div>
                                <div><img id="hrImg2" src={imageSucursal} alt="Sucursal"/> </div>
                                <div id="panelCardBottom">DELICIAS</div>
                            </div>
                            <div className="panelCard2">
                                <div className="panelCardTitle">BAJA</div>
                                <div><img id="hrImg2" src={imageSucursal} alt="Sucursal"/> </div>
                                <div id="panelCardBottom">UNIVERSIDAD</div>
                            </div>
                        </div>
                    </div>

                    <div className="panelItem">
                        <div className="panelItem panelMid">

                            <div className="panelHeader">

                                <div className="panelTitle">
                                    Importante
                                </div>

                                <div className="panelImg">
                                    <img id="hrImg" src={imageQuestion} alt="Question" />
                                </div>

                            </div>

                            <div className="panelComponent" style={{padding:'1%', fontSize:'1.3rem'}} id="pCom">
                                {botMessage}
                            </div>
                        </div>


                        <div className="panelItem panelMid">

                            <div className="panelHeader">

                                <div className="panelTitle" style={{padding: '4%'}}>
                                    Has una pregunta con el bot de inventario
                                </div>

                                <div className="panelImg">
                                    <img id="hrImg" src={imageQuestion}  alt="Question" />
                                </div>

                            </div>

                            <Chatbox/>
                        </div>
                    </div>

                </div>

                <div className="panel" id="panelGrafica">
                    <div style={{display: 'inline-table', margin:'4%'}}>
                        <p style={{width:'100%'}} >Stock de producto</p>
                        <Grafica id={1}/>
                    </div>
                    <div style={{display: 'inline-table', margin:'4%'}}>
                        <p style={{width:'100%'}} >Stock de producto</p>
                        <Grafica id={2}/>
                    </div>
                    <div style={{display: 'inline-table', margin:'4%'}}>
                        <p style={{width:'100%'}} >Stock de producto</p>
                        <Grafica id={3}/>
                    </div>
                </div>

            </div>
        </>
    </>
  );
};

export default Menu