import React, { useState } from 'react';
import { realizarSolicitudFetch } from './helpers/helperAI';
import imagen from './assets/Imagen1.png'

const Chatbox = () => {
    const [message, setMessage] = useState('');
    const [botMessage, setBotMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleButtonClick = async () => {
        try {
            const url = 'https://api.respell.ai/v1/run';
            const metodo = 'POST';
            const datos = {
                spellId: 'O4LCLi1ZEJ9gc45XgprVZ',
                spellVersionId: 'kkn0yyUKh7n5qUzu6Kj5V',
                inputs: {
                    input_3: message,
                },
            };

            const resultado = await realizarSolicitudFetch(url, metodo, datos);
            setBotMessage(resultado.outputs.output);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <>
            <div style={{ width: '96%', padding: '2%', aspectRatio: '2/1', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '4%', flex: 1, backgroundColor: 'rgb(240,240,240)', borderRadius: '15px' }}>
                    <div style={{ width: '88%', color: 'black', fontSize: 30, fontFamily: 'Arial light', fontWeight: '300', wordWrap: 'break-word', padding: '4%' }}>{botMessage}</div>
                </div>
                <div style={{ width: '100%', background: 'white', display: 'flex' }}>
                    <input
                        type="text"
                        value={message}
                        onChange={handleChange}
                        style={{  
                            width: '90%',
                            height: 40,
                            color: 'black',
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            wordWrap: 'break-word',
                            padding: '4%',
                            boxSizing: 'border-box',
                            borderRadius: '15px',
                            boxShadow: '5% 5% 10% #555555',
                            border: 'none',
                            backgroundColor: 'rgb(240,240,240)'
                        }}
                        placeholder="Hey bot, ¿Qué sucursales debo surtir ahora mismo y de qué producto?"
                    />
                    <div style={{
                        marginLeft: '1vw',
                        width: '3.3vw',
                        height: '100%',
                        backgroundImage: './assets/Imagen1.png',
                        borderRadius: '15px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgb(240,240,240)'
                    }} onClick={handleButtonClick}><img src={imagen} style={{filter: 'brightness(55%) saturate(60%) hue-rotate(20deg)'}}></img></div>
                </div>
            </div>

        </>
    );
};

export default Chatbox;
