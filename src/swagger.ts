import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Church API',
    version: '1.0.0',
    description: 'API documentation for Church app',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/swaggerDocs/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec; 