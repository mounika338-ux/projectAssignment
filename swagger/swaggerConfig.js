//swagger.js
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Terralogic Task Management API",
            version:"1.0.0",
            description:"API documentation for Terralogic Task Management backend",
        },
        servers:[{
            
            url:"http://localhost:5000",description:"local server"},
            {
            url:"https://projectassignment-wp8m.onrender.com" , description:"Deployment Server"
            }
        ],
        components:{
            securitySchemes:{
                bearerAuth:{
                    type:"http",
                    scheme:"bearer",
                    bearerFormat:"JWT",
                },
            },
        },

    },
    apis:["./routes/*.js"],//path to your route files
};
const swaggerSpec=swaggerJsdoc(options);
export{swaggerUi,swaggerSpec};

        
    
