 //사용자가 주문을 할 때마다 주문 내역을 관찰하고, 총 결제 금액을 업데이트하는 PaymentObserver
 
class PaymentObserver {
    constructor() {
        this.totalAmount = 0;
    }

    update(user, product) {
        this.totalAmount += product.price;
        console.log(`총 누적 결제금: ${this.totalAmount}`);
    }
}

module.exports = PaymentObserver;


 