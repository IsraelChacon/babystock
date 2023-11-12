const API_URL = 'https://babystock-2-dev-anmg.3.us-1.fl0.io';

export const fetchDataById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/inventario/producto/${id}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};