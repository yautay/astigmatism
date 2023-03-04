import express from "express";
import bodyParser from "body-parser";
// import swaggerUiExpress from "swagger-ui-express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import expressJSDocSwaggerOptions from "./swagger/swagger-jsdoc.js";
// import swaggerDocument from "./swagger.json";
import bulletinsRouter from "./routes/route-bulletins.js";
import sequelize from "./db/db.js";

let api_app;
api_app = express();

// api_app.use(bodyParser.urlencoded());
api_app.use(bodyParser.json());

api_app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

api_app.use('/bulletins-management', bulletinsRouter)

// api_app.use('/api-docs', swaggerUiExpress.serve);
expressJSDocSwagger(api_app)(expressJSDocSwaggerOptions);

// console.log(sequelize.modelManager.models.length)

api_app.listen(3000);


