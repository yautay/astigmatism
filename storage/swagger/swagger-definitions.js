// import * as dotenv from 'dotenv';
// dotenv.config();

const swaggerDefinition = {
    info: {
        version: '0.1.0',      // by default: '1.0.0'
        title: 'ASTIGMATISM-API',        // by default: 'REST API'
        description: 'ASTIGMATISM REST API',  // by default: ''
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
    },
    security: {
        BasicAuth: {
            type: 'http',
            scheme: 'basic',
        },
    },
    host: 'localhost:3000',      // by default: 'localhost:3000'
    tags: [        // by default: empty Array
        {
            name: 'bulletins',         // Tag name
            description: 'Operations with Bulletins',  // Tag description
        },
    ],
}
export default swaggerDefinition;