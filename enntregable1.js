class ProductManager {
    #products
    constructor() {
        
        this.#products = []
    }

    getProducts = () => this.#products

    creadorId = () => {
        return (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id + 1
    }

    addProducts = (title, description, price) => {
        const id = 
        this.#products.push({id: this.creadorId(), title, description, price})
    }
}

const productManager = new ProductManager()
productManager.addProducts('motorolla g50', 'gama media', 50000)
console.log(productManager.getProducts());