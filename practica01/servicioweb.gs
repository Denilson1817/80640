// regresa de forma textual los parámetros leidos con get
  const doGet = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Deni', apellido = 'GetPerez' } = parameter;
    const salida = `Hola ${nombre} ${apellido}`;
    return ContentService.createTextOutput(salida);
  };

// regresa de forma textual los parámetros leidos con post
  const doPost = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Denilson', apellido = 'PostPerez' } = parameter;
    const salida = `Hola ${nombre} ${apellido}`;
    return ContentService.createTextOutput(salida);
  };