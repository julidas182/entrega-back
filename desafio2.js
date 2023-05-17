import fs from 'fs'

class ProductManager {
    constructor(path) {
        this.path = path
        this.format = 'utf-8'
    }

    createProducts = async(title, description, price, thumbnail, code, stock) => {
        const products = await this.getProducts()
        products.push({title, description, price, thumbnail, code, stock})
        return await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'))
    }


    getProducts = async() => {
        return JSON.parse(await fs.promises.readFile(this.path, this.format))

    }
    
}

const manager = new ProductManager('./products.json')
manager.createProducts('motorolla g50', 'gama media', 50000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yuhmak.com%2Fcelular-motorola-edge-30-8-128-gb-ss-rt-gris--dh2%2Fp&psig=AOvVaw3yXB26k7mZVc_gEy9enjC_&ust=1683771788482000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKi7v-7Y6f4CFQAAAAAdAAAAABAF', 12, 5)