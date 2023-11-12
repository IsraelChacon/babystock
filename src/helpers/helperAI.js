// helpers.js
export const realizarSolicitudFetch = async (url, metodo, datos) => {
    try {
      const response = await fetch(url, {
        method: metodo,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer f8964fc2-f5de-4fc7-9ade-878960206f9b',
        },
        body: JSON.stringify(datos),
      });
  
      const resultado = await response.json();
      return resultado;
    } catch (error) {
      throw new Error('Error en la solicitud:', error);
    }
  };
  