const express = require('express');
const { send } = require('process');
const ProductManager = require('./index');

tienda = new ProductManager
tienda.addProducts('Ps5','Consola Ps5', 450,'img.png','p2341',23)
tienda.addProducts('Xbox Juan','Consola Xbox', 233,'img.png','p1234',222)
tienda.addProducts('Iphone','Iphone', 1000,'img.png','p1111',2)
tienda.addProducts('Cartas Magi','Cartas', 13,'img.png','p2222',2222)
tienda.addProducts('Cartas Poker','Poker', 13,'img.png','1233',300)

const server = express()
server.use(express.urlencoded({extended:true}))


server.get('/products/:pid',(req,res) =>{
    const id = req.params.pid
    const prod = tienda.getProductById(id)
    if(!prod){
        res.send(`No existe el ${id}`)
    }
    res.send(prod)
})

server.get('/products',(req,res) =>{
    let {limit} = req.query
    if(!limit) {
        limit = tienda.productosLenght()
    }
    res.send(tienda.getProducts(limit))
    
})


server.listen(8080,() => {
    console.log('servidor escuchando')
})