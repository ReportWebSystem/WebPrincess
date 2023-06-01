//Singleton 패턴을 사용하여 상품 목록을 관리합니다. 이 클래스는 하나의 인스턴스만 생성되며, 이 인스턴스를 통해 전체 시스템에서 상품을 관리할 수 있ek.

const Product = require('../models/product');

class ProductManager {
    constructor() {
        if (!ProductManager.instance) {
            this.products = [];
            ProductManager.instance = this;
        }
        return ProductManager.instance;
    }
 
    addProduct(name, quantity, price) { //addProduct 메소드를 통해 Product 객체를 생성하고 관리한다. (팩토리 패턴)
        const product = new Product(name, quantity, price);
        this.products.push(product);
    }

    listProducts() {
        return this.products;
    }

    checkQuantity(strategy) {
        return strategy.execute(this.products);
    }
}

const instance = new ProductManager();
Object.freeze(instance);

module.exports = instance;



//Factory 패턴: UserManager와 ProductManager 클래스에서 사용되었음.
//Factory 패턴은 객체 생성 로직을 메서드 내에 캡슐화하여, 클라이언트가 직접 객체를 생성하는 것을 대신해줌.
// createUser와 addProduct 메서드는 각각 User와 Product 객체를 생성하고, 이들 객체를 관리하는 역할을 함.


//Singleton 패턴: ProductManager 클래스에서 사용됨.  Singleton 패턴은 특정 클래스의 인스턴스가 오직 하나만 존재하도록 보장하는 패턴
// 이 패턴은 전체 시스템에서 상품 목록을 관리하는 공통의 접근점을 제공하며, 상품의 일관성을 보장함.