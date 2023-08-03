function validarCredenciales(usuario, clave) {
    return usuario === 'admin' && clave === '1234';
  }
  
  function iniciarSesion() {
    let usuarioIngresado, claveIngresada;
    let credencialesValidas = false;
  
    while (!credencialesValidas) {
      usuarioIngresado = prompt('Ingrese su nombre de usuario:');
      claveIngresada = prompt('Ingrese su contraseña:');
  
      credencialesValidas = validarCredenciales(usuarioIngresado, claveIngresada);
  
      if (!credencialesValidas) {
        alert('Error: Usuario o contraseña incorrectos. Por favor, ingrese nuevamente.');
      }
    }
  
    alert('¡Bienvenido, admin!!!');
  }
  
  iniciarSesion();