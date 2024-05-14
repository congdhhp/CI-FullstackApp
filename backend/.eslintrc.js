module.exports = {
    env: {
        browser: true, // Cho phép các biến toàn cục của trình duyệt như window và document
        es2021: true, // Hỗ trợ các tính năng ES2021
        node: false  // Đảm bảo ESLint biết bạn không đang làm việc trong môi trường Node.js
    },
    extends: [
        'eslint:recommended' // Sử dụng tập hợp các quy tắc được khuyên dùng bởi ESLint
    ],
    parserOptions: {
        ecmaVersion: 12, // Hoặc phiên bản ECMAScript nào phù hợp với tính năng bạn sử dụng
        sourceType: 'module', // Cho phép sử dụng import/export modules
    },
    rules: {
        'no-unused-vars': 'warn', // Cảnh báo biến không sử dụng
        'no-undef': 'error', // Lỗi nếu sử dụng biến không được khai báo
        'eqeqeq': ['error', 'always'], // Yêu cầu sử dụng === và !== thay vì == và !=
        // Thêm các quy tắc khác tùy theo nhu cầu của bạn
    }
};
