const fs = require('fs')
const crearArchivo = async(datos) =>{
    await fs.promises.writeFile('./datos.txt','')

    let resultado = await fs.promises.readFile('./datos.txt','utf-8')
    console.log(resultado)

    await fs.promises.appendFile('./datos.txt',datos)
    resultado = await fs.promises.readFile('./datos.txt','utf-8')
}

class ProductManager{

    productos = []

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

    getProducts(){
        console.log(this.productos)
    }

    generateUniqueId(){
        let name = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);
        //id generado automaticamente se sugiere cambiarlo a otro para que sea constante y mas facil de buscar para probar el
        return name    
    }
    
    getProductById(id){
        for(const producto of this.productos){
            if(producto.id == id){
                console.log(producto)
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


tienda = new ProductManager
tienda.addProducts('Ps5','Consola Ps5', 450,'img.png','p2341',23)
tienda.getProductById()