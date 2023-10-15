const fs = require('fs');

if (!fs.existsSync('./citas.json')) {
    const citas = '[]';
    fs.writeFileSync('citas.json', citas);
};

const { registrar, leer, vaciar } = require('./operaciones');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
};
if (operacion === "leer") {
    leer('./citas.json');
};
if (operacion === 'vaciar') {
    vaciar('./citas.json');
};