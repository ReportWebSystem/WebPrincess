class AllProductsQuantityStrategy {
    execute(products) {
        let totalQuantity = 0;
        for (const product of products) {
            totalQuantity += product.quantity;
        }
        return totalQuantity;
    }
}

class SingleProductQuantityStrategy {
    constructor(productName) {
        this.productName = productName;
    }

    execute(products) {
        for (const product of products) {
            if (product.name === this.productName) {
                return product.quantity;
            }
        }
        return 0;
    }
}

module.exports = { AllProductsQuantityStrategy, SingleProductQuantityStrategy };


  //품 수량을 확인하는 다양한 전략을 정의해 보겠습니다. 예를 들어, 모든 상품의 수량을 확인하는 전략과, 특정 상품의 수량만 확인하는 전략