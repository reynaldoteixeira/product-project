import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    private productList = [];

    async getAllProducts() {
        return this.productList;
    }

    async createProduct(product) {
        this.productList.push(product);
    }
}
