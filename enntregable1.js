class ProductManager {
    #products
    #error
    constructor() {
        
        this.#products = []
        this.#error = undefined
    }

    getProducts = () => this.#products

    getProductsById = (id) => {
        const product = this.#products.find(item => item.id === id)
        if (!product) return 'not products'
        return product
    }

    creadorId = () => {
        return (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id + 1
    }

    #validateProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            this.#error = `[${title}]: tiene campos incompletos`
        } else {
            const found = this.#products.find(item => item.code === code)
            if (found) this.#error = `[${title}]: el codigo ya existe`
            else this.#error = undefined
    
        }


    }
    

    addProducts = (title, description, price, thumbnail, code, stock) => {
        this.#validateProduct(title, description, price, thumbnail, code, stock)
        if (this.#error === undefined) 
        this.#products.push({id: this.creadorId(), title, description, price, thumbnail, code, stock})
         else console.log(this.#error);
         
    }
}

const productManager = new ProductManager()
productManager.addProducts('motorolla g50', 'gama media', 50000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yuhmak.com%2Fcelular-motorola-edge-30-8-128-gb-ss-rt-gris--dh2%2Fp&psig=AOvVaw3yXB26k7mZVc_gEy9enjC_&ust=1683771788482000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKi7v-7Y6f4CFQAAAAAdAAAAABAF', 12, 5)
productManager.addProducts('motorolla g50', 'gama media', 50000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yuhmak.com%2Fcelular-motorola-edge-30-8-128-gb-ss-rt-gris--dh2%2Fp&psig=AOvVaw3yXB26k7mZVc_gEy9enjC_&ust=1683771788482000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKi7v-7Y6f4CFQAAAAAdAAAAABAF', 12, 6)
productManager.addProducts('motorolla g50', 'gama media', 50000)
console.log(productManager.getProducts());
console.log(productManager.getProductsById(1));