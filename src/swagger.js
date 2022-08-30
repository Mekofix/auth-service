const swaggerAutogen = require("swagger-autogen")()
require("dotenv").config();


const doc = {
    info: {
        version: "1.0.0",
        title: "Mekofix Authentication service",
        description: "Auto Documenting APIS with Swagger documentation"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        "Authentication",
        "Rate Limiter"
    ],
    definitions: {
        TechinicianModel: {
            $firstname: "John",
            $lastname: "Samuel",
            $middlename: "Daniel",
            $email: "JohnSam@gmail.com",
            $phoneNumber: "09012345678"
        }
    }
}
const outputFile = "./swagger_output.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./index");
});