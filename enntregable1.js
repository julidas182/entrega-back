class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => this.products

    addProducts = (title, description, price) => {
        this.products.push({title, description, price})
    }
}

const productManager = new ProductManager()
productManager.addProducts('motorolla g50', 'gama media', 50000)
console.log(productManager.getProducts);