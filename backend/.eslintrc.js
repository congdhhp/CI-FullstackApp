module.exports = {
    env: {
        browser: true, // Cho phép các biến toàn cục của trình duyệt
        es2021: true, // Hỗ trợ các tính năng ES2021
        node: true, // Rất quan trọng để nhận diện các từ khoá như 'require' và 'module'
        mocha: true, // Hoặc 'jest' nếu bạn sử dụng Jest
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 12, // Hoặc phiên bản ECMAScript mà bạn sử dụng
        sourceType: 'module', // Cho phép sử dụng import/export
    },
    rules: {
        // Các quy tắc cụ thể của bạn
    }
};
