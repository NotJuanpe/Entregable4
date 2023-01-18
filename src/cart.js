const ProductManager = require('./products');

const fs = require('fs')
const crearArchivo = async(carritoDatos) =>{
    await fs.promises.writeFile('./carritoDatos.txt','')

    let resultado = await fs.promises.readFile('./carritoDatos.txt','utf-8')
    console.log(resultado)

    await fs.promises.appendFile('./carritoDatos.txt',carritoDatos)
    resultado = await fs.promises.readFile('./carritoDatos.txt','utf-8')
}


tienda = new ProductManager

class Cart{
    
    carritos = []
    idAutoincremental = 0

    createCarrito(){
        let carrito = {products:[]}
        this.carritos.push(carrito)

        crearArchivo(JSON.stringify(carrito))
    }

    addProductToCart(cartId,productId){
        if(cartId >= this.carritos.length){
            return `No existe el id`
        }else{
            if(getProductById(productId)){
                if(this.carritos[cartId].some(productId)){
                    this.carritos[cartId][cantidad] = cantidad + 1
                }else{
                    this.carritos[cartId].push({id : productId, cantidad: 1})
                }
                
            }

            
            return this.carritos[cartId]
        }
    }

    generateUniqueId(){
        let id = this.idAutoincremental
        this.idAutoincremental = this.idAutoincremental + 1
        return id
    }

    getCartById(id){
        for(const cart of this.carritos){
            if(cart.id == id){
                return cart
            }else{
                console.error("No se encontro el carrito buscado")
            }
        }
    }
}

module.exports = Cart