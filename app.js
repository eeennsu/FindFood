const connection = require('./public/js/back/mysql.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');
const compression = require('compression');
const pagesRouter = require('./routes/pages.js');
const userRouter = require('./routes/user.js');


// 데이터를 gzip방식으로 압축하게 해주는 기능, 더 가벼워진다.
app.use(compression());


// 정적파일을 사용할 수 있도록 폴더 로드해주기 (해주지 않으면 css, js파일과 연결 x)
app.use(express.static('public'));





// POST 방식으로 전송된 form 데이터를 req 객체의 body 속성에 넣어주기 위해서 Node.js 서버에 아래와 같은 Body Parser 미들웨어를 추가한다.
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// 화면 엔진을 ejs로 설정하면 html파일을 로드할때 can not find module html이 발생하지 않는다.
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');


app.use('/page', pagesRouter);
app.use('/user', userRouter);


// 처음 메인 페이지 접속
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


// 오류 페이지 설정
app.use((req, res) => {
    res.status(404).send('404 Error - Page Not Found');
});


// 전체적인 에러 설정, 404보다 범위가 크기에 404 밑에 있어야 한다.
// if(err) cb(err)를 통해 넘어온 콜백함수를 통해 실행된다.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Sorry.. can not find data');
});


// 포트설정
app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is connected to port ${port}!!`);
});