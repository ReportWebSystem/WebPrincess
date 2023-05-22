const User = require('../models/user');

const userManager = (() => {
    const createUser = (name, role) => {
        return new User(name, role);
    };

    return {
        createUser,
    };
})();

module.exports = userManager;

//Factory 패턴: UserManager와 ProductManager 클래스에서 사용되었음.
//Factory 패턴은 객체 생성 로직을 메서드 내에 캡슐화하여, 클라이언트가 직접 객체를 생성하는 것을 대신해줌.
// createUser와 addProduct 메서드는 각각 User와 Product 객체를 생성하고, 이들 객체를 관리하는 역할을 함.