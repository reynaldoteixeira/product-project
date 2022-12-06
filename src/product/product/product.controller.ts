import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {

    constructor(
        private productService: ProductService
    ){}

    @Get()
    async getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Post()
    async createProduct(@Body() product) {
        this.productService.createProduct(product);
        return product;
    }
}
