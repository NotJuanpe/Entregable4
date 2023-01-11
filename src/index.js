const fs = require('fs')
const crearArchivo = async(datos) =>{
    await fs.promises.writeFile('./datos.txt','')

    let resultado = await fs.promises.readFile('./datos.txt','utf-8')
    console.log(resultado)

    await fs.promises.appendFile('./datos.txt',datos)
    resultado = await fs.promises.readFile('./datos.txt','utf-8')
}

class ProductManager{

    idAutoincremental = 0
    productos = []

    productosLenght(){
        return this.productos.length
    }

    addProducts(title,description,price,thumbnail,code,stock){

        for(const producto of this.productos){
            if(producto.code == code){
                console.log("No se puede agregar productos con codigo repetido")
                return
            }
        }

        let id = this.generateUniqueId()
        let product = {id,title,description,price,thumbnail,code,stock}
        this.productos.push(product)

        crearArchivo(JSON.stringify(product))
        
    }

    getProducts(limit){

        let produtosADevolver = []

        for(var i = 0;i < limit;i++){
            produtosADevolver.push(this.productos[i])
        }

        return produtosADevolver
    }

    generateUniqueId(){
        let id = this.idAutoincremental
        this.idAutoincremental = this.idAutoincremental + 1
        return id
    }
    
    getProductById(id){
        for(const producto of this.productos){
            if(producto.id == id){
                return producto
            }else{
                console.error("No se encontro el producto buscado")
            }
        }
    }

    async updateProduct(id){

        let resultado = await fs.promises.readFile('./datos.txt','utf-8')
        resultado = await fs.promises.readFile('./datos.txt','utf-8')
    }
}

module.exports = ProductManager
