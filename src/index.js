const OrderCommand = require('./utils/orderManager');  //Command 패턴을 이용하면 주문이라는 작업을 캡슐화하여 언제든지 실행
//이렇게 Command 패턴을 이용하면 주문이라는 작업을 캡슐화하여 언제든지 실행할 수 있게 됨.
//주문 내역을 저장하고 나중에 재실행하거나 취소하는 등의 기능을 추가할 수도 있음.
//이는 사용자 인터페이스의 버튼 클릭 등과 같이 특정한 작업을 수행하는 기능을 구현할 때 유용하게 쓰임.

const { AllProductsQuantityStrategy, SingleProductQuantityStrategy } = require('./utils/quantityStrategies');

const PaymentObserver = require('./utils/paymentObserver');

//모듈 패턴을 사용하여 ProductManager와 UserManager를 생성
const userManager = require('./utils/userManager');
const productManager = require('./utils/productManager');

//팩토리 패턴을 통해 UserManager에서 사용자를 생성
const admin = userManager.createUser('jinmo', 'admin'); //관리자
const customer = userManager.createUser('wonbin', 'customer'); //고객

productManager.addProduct('laptop', 10, 2000000);  //이름, 분량, 가격
productManager.addProduct('Phone', 20, 1500000);  //이름, 분량, 가격

const products = productManager.listProducts();

const paymentObserver = new PaymentObserver();

console.log(admin, customer);
console.log(productManager.listProducts());


const laptopOrder = new OrderCommand(customer, products[0]);
laptopOrder.addObserver(paymentObserver);
laptopOrder.execute();  // 주문 실행

const phoneOrder = new OrderCommand(customer, products[1]);
phoneOrder.addObserver(paymentObserver);
phoneOrder.execute();  // 주문 실행


const allProductsQuantityStrategy = new AllProductsQuantityStrategy();
console.log('Total quantity of all products:', productManager.checkQuantity(allProductsQuantityStrategy));  // Total quantity of all products: 28

const singleProductQuantityStrategy = new SingleProductQuantityStrategy('laptop');
console.log('Quantity of Laptop:', productManager.checkQuantity(singleProductQuantityStrategy));  // Quantity of Laptop: 9