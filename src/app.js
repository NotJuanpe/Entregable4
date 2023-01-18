const express = require('express');
const ProductManager = require('./products');
const Cart = require('./cart');

carrito = new Cart
tienda = new ProductManager

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.get('api/products/:pid',(req,res) =>{
    const id = req.params.pid
    let prod = tienda.getProductById(id)
    if(!prod){
        prod = `No existe el ${id}`
    }
    res.send(prod)
})

server.get('api/products',(req,res) =>{
    let {limit} = req.query
    if(!limit) {
        limit = tienda.productosLenght()
    }
    res.send(tienda.getProducts(limit))
    
})

server.post('api/products/:title/:description/:price/:thumbnail/:code/:stock',(req,res) =>{
    const title = req.params.title
    const description = req.params.description
    const price = req.params.price
    const thumbnail = req.params.thumbnail
    const code = req.params.code
    const stock = req.params.stock


    if(!title || !description || !price || !thumbnail || !code || !stock){
        res.send("Falta informacion producto no creado")
    }else{
        tienda.addProducts(title,description,price,thumbnail,code,stock)
        res.send("Producto creado correctamente")
    }
})

server.put('api/products/:pid',(req,res) =>{
    const id = req.params.pid
    tienda.updateProduct(id)
    res.send(`Se updateo el producto ${id}`)
})

server.delete('api/products/:pid',(req,res) =>{
    const id = req.params.pid
    let prod = tienda.getProductById(id)
    if(!prod){
        prod = `No existe el ${id}`
    }
    res.send(prod)
})

server.post('api/cart',(req,res) =>{
    carrito.createCarrito()
})

server.get('api/cart/:cid',(req,res) =>{
    const id = req.params.cid
    let cart = carrito.getCartById(id)
    if(!prod){
        prod = `No existe el ${id}`
    }
    res.send(cart) 
})

server.post('api/cart/:cid/product/:pid',(req,res) =>{
    const cartId = req.params.cid
    const prodId = req.params.pid
    
    if(carrito.getCartById(cartId) && tienda.getProductById(id)){
        carrito.addProductToCart(cartId,prodId)
    }
    res.send(carrito.getCartById(cartId))
    
})



server.listen(8080,() => {
    console.log('servidor escuchando')
})