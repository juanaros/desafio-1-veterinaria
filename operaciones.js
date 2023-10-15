const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    let datos = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log('Todos los campos son obligatorios');
        return;
    } else {
        let citas = fs.readFileSync('./citas.json', 'utf8');
        let parseCitas = JSON.parse(citas);
        parseCitas.push(datos);
        let citasJson = JSON.stringify(parseCitas, null, 2);
        fs.writeFileSync('./citas.json', citasJson);
        console.log('Registrado');
    }
};

const leer = (ruta) => {
    let lectura = fs.readFileSync(ruta, 'utf8');
    if (lectura === '[]') {
        console.log('No hay registros');
    } else {
        console.log(lectura);
    }
};

const vaciar = (ruta) => {
    let citas = fs.readFileSync(ruta, 'utf8');
    let parseCitas = JSON.parse(citas);
    if(parseCitas.length === 0) {
        console.log('No existen registros para vaciar');
    } else {
        fs.writeFileSync(ruta, '[]');
        console.log('Los registros han sido borrados');
    }
}

module.exports = {
    registrar,
    leer,
    vaciar
};