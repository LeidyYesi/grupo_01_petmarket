const path = require('path');
const fs = require('fs');
const model = require('../models/jsonTableFunctions');
const product = model('productsDataBase');
const moveFile = require('../models/imageDistribution');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
  // (get) Root - Mostrar todos los productos
  index: (req, res) => {
    let pet = req.params.pet;

    let products = product.findAll();

    let productosFiltrados = products.filter(producto => {
			return producto.pet == pet
		})

    res.render("products/productList", {productos: productosFiltrados})
  },

  // (get) Detail - Detalle de un producto
  detail: (req, res) => {
    let id = req.params.id;
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productoFiltrado = products.find(producto => {
			return producto.id == id
		})

		res.render("products/productDetail", {producto: productoFiltrado})
  },

  // (get) Create - Formulario para crear
  create: (req, res) => {
    res.render("products/productCreate");
  },

  // (post) Create - Método para guardar la info
  processCreate: (req, res) => {
    console.log(req.body);
    let productoNuevo = {
			...req.body,	
      image: req.file.filename
    }

    let destinationPath = './public/img/' + req.body.category + '/' + req.body.pet;
    console.log("destinationPath",destinationPath);
    moveFile(req.file.filename, req.file.destination,destinationPath);
    

		let productCreated = product.create(productoNuevo);
		

    res.redirect("/");
  },

  // (get) Update - Formulario para editar
  edit: (req, res) => {
    res.render("products/productEdit");
  },
  // (put) Update - Método para actualizar la info
  // processEdit: (req, res) => {

  // },

  // (delete) Delete - Eliminar un producto de la DB
  destroy: (req, res) => {
    let id = req.params.id;
    product.delete(id);
    res.redirect("/");
  },
  cart: (req, res) => {
    res.render("products/productCart");
  },

};



module.exports = productsController;