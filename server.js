// server.js
// 설정 방법
// 1. npm init -y
// 2. npm install express
// 3. touch server.js (서버 파일 생성, 선택사항 그냥 수동으로 server.js파일 만들어도 됨. windows에서는 touch대신 ni로 대체)
// 4. node server.js

// 1. express 모듈을 불러옵니다.
const express = require('express');

// 2. express 어플리케이션을 생성합니다.
const app = express();

// 3. 포트 번호를 설정합니다.
const port = 3000;

// 4. 라우팅(Routing) 설정
// 클라이언트가 서버의 루트 경로('/')로 GET 요청을 보냈을 때, 실행될 코드를 정의합니다.
app.get('/', (req, res) => {
    // res.send()는 내용을 보내고 응답을 종료하는 편리한 메소드
    res.send('Hello World with Express!');
});

// '/about' 경로로 GET 요청이 왔을 때의 응답도 정의할 수 있습니다.
app.get('/about', (req, res) => {
    res.send('<h1>This is the about page.</h1>');
});

// 5. 설정된 포트에서 서버가 요청을 기다리도록 합니다(서버 실행).
app.listen(port, ()=>{
    console.log(`Express server listening at http://localhost:${port}`);
});