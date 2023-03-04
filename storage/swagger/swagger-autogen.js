import swaggerDefinition from "./swagger-definitions.js";
import swaggerAutogen from 'storage/swagger/swagger-autogen.js';

const outputFile = './swagger.json'
const endpointsFiles = ['./api_app.js']
// noinspection JSUnusedLocalSymbols
const swaggerAutoGen = swaggerAutogen(outputFile, endpointsFiles, swaggerDefinition).then(() => {
    require('../api_app.js');
});



