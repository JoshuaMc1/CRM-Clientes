export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL_CLIENTES);

  const resultado = await respuesta.json();

  return resultado;
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL_CLIENTES}/${id}`);

  const resultado = await respuesta.json();

  return resultado;
}

export async function agregarClientes(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL_CLIENTES, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarClientes(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_CLIENTES}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarClientes(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_CLIENTES}/${id}`, {
      method: 'DELETE',
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}