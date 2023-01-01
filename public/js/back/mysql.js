// mysql node 가져오기
const mysql = require('mysql');
const database = 'findfood';

// 연결자 생성
const connection = mysql.createConnection({
    host: 'localhost',                        // 주소
    user: 'root',                             // 계정
    port: '3306',
    password: '1234',                     // 비번
    database: database,                     // db이름
});

// 연결 실행, 콜백함수 파라미터로 에러값 받음.
connection.connect((err) => {
    if(err) throw err;

    console.log(`${database} DB is connected!!`); 
});       


// // 로그인
// exports.login = (u_email, u_pw, cb) => {
//     connection.query(`select * from user where u_email='${u_email}' && u_pw='${u_pw}' limit 1`, cb);
// }

module.exports = connection;