import express from 'express';
import ProductController from './src/controllers/product.controllers.js';
import path from 'path';

const server = express();

//setup view engine?
server.set("view engine", "ejs");
server.set('views',path.join(path.resolve(),'src','views'));
// server.set('views', './views');
const productController = new ProductController();
server.get('/',productController.getProducts);
// Serve static files from 'src/views' directory
server.use(express.static('/src/views'));
// Start the server
server.listen(3400, () => {
  console.log('Server is listening on port 3400');
});
