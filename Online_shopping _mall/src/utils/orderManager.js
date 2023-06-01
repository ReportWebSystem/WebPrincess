const Order = require('../models/order');
const Subject = require('./subject');
//Command 패턴: OrderCommand 클래스에서 사용 됨. Command 패턴은 요청을 객체로 캡슐화하고, 사용자 요청에 따라 로직을 선택할 수 있게 해줌.
//OrderCommand 클래스는 주문 요청을 객체로 캡슐화하며, execute 메서드를 통해 주문을 처리함.


// Observer 패턴: OrderCommand (Subject)와 PaymentObserver (Observer) 클래스에서 사용됨.
//Observer 패턴은 객체의 상태가 변경될 때마다 모든 의존성을 자동으로 업데이트하는 방식으로, 이 패턴은 주로 둘 이상의 객체 상태가 서로 의존해야 하는 경우에 사용됨.
//OrderCommand는 주문이 이루어질 때마다 PaymentObserver에게 알림을 보내고, PaymentObserver는 이 알림을 받아 총 결제 금액을 업데이트함.

 // 주문을 실행하는 역할
class OrderCommand {
    constructor(user, product) {       //주문에 필요한 정보 저장
        this.user = user;
        this.product = product;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    //orderCommand의 execute 메서드에서 주문이 완료된 후 상품의 수량을 감소시키도록 함. 
    execute() { // execute 메소드를 호출하여 주문을 처리합
        if (this.product.quantity <= 0) {
            console.log(`주문 실패: ${this.product.name} 품절`);  //상품의 수량이 0 이하로 떨어질 경우 주문이 실패하도록 설정.
            return;
        }
        console.log(`주문자: ${this.user.name} 주문 상품: ${this.product.name}`);
        this.product.quantity -= 1;  // reduce the product quantity
        this.notifyAll();
    }

    notifyAll() {  //
        return this.observers.forEach(observer => observer.update(this.user, this.product));
    }
}

module.exports = OrderCommand;


//PaymentObserver를 OrderCommand의 Observer로 등록하고, 주문을 실행할 때마다 총 결제 금액이 업데이트