// IMPORTAT MODULOS REQUERIDOS
const express = require('express');

// INICIAR LA CONFIGURACION
const app = express();
const port = 3000;

// INICIALIZACION DE RUTAS: localhost:3000/prueba
app.get("/prueba", function(request, response){
    // PROCESAR LA PETICION
    let nombres = "Antonia Yepes Quintero";
    // ENVIAR LA RESPUESTA
    response.send(nombres);
});

//  CONFIGURAR DONDE EL API VA ESTAR MONITOREANDO PETICIONES
app.listen(port, function(){
    console.log("API ejecutandose en el port" + port)
});





