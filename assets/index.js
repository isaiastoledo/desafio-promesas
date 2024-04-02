// Función asíncrona para obtener los datos de la URL
async function obtenerDatos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // Utilizando forEach para mostrar los primeros 20 títulos de álbumes
      data.forEach((album, index) => {
        if (index < 20) {
          console.log(album.title);
        }
      });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  // Función que retorna una promesa después de tres segundos
  function enviarInformacion() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Información Enviada');
      }, 3000);
    });
  }
  
  // Función asíncrona para mostrar el mensaje en la consola del navegador
  async function mostrarMensaje() {
    const mensaje = await enviarInformacion();
    console.log(mensaje);
  }
  
  // Llamado a las dos funciones principales
  obtenerDatos();
  mostrarMensaje();
  