// server02.js

// 필요한 모듈 불러오기
const express = require('express');
const app = express();
const port = 3000;

// express.json() 미들웨어 설정
// 클라이언트가 보낸 JSON 요청의 body를 파싱하여 req.body 객체로 사용할 수 있게 해줍니다.
// 이 설정이 없으면 req.body는 undefined로 표시됩니다.
app.use(express.json());

// 임시 데이터베이스 (실제로는 MongoDB, MySQL 등을 사용)
// API 테스트를 위해 메모리에 사용자 데이터 배열을 만든다.
let users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

// API 엔드포인트(Endpoint) 및 라우팅(Routing) 설정
// GET /api/users : 모든 사용자 목록을 JSON으로 응답
app.get('/api/users', (req, res) => {
    // res.json() 메소드는 JavaScript 객체나 배열을 자동으로
    // JSON 문자열로 변환하고, Content-Type 헤더를 application/json으로 설정하여 응답합니다.
    res.json(users);
});

// GET api/users/:id 특정 ID의 사용자를 JSON으로 응답
// app.get('/api/users/:id', (res,req) => {
    app.get('/api/users/:id', (req,res) => {
    // URL 파라미터에서 id 값을 가져옵니다. (문자열이므로 숫자로 변환)
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if(user) {
        res.json(user);
    }else{
        // 사용자를 찾지 못한 경우 404 상태 코드와 에러 메시지를 JSON으로 응답.
        res.status(404).json({ error : 'User not found'});
    }
});

// POST /api/users : 새 사용자를 추가하고 결과를 JSON으로 응답
app.post('/api/users', (req,res) => {
    // express.json() 미들웨어 덕분에 req.body에서 클라이언트가 보낸 JSON 데이터에 접근할 수 있다.
    const newUser = req.body;

    if(!newUser || !newUser.name){
        return res.status(400).json({error: 'User name is required'});
    }

    // 새 사용자의 ID를 자동으로 생성합니다.
    newUser.id = Date.now();
    users.push(newUser);

    // 201 상태 코드(Created)와 함께 새로 생성된 사용자 정보를 JSON으로 응답
    res.status(201).json(newUser);
});

// 서버 실행
app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
})