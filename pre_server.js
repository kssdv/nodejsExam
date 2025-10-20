// 1. http 모듈을 불러옵니다. 이 모듈은 HTTP 서버를 생성하는 기능을 담고 있습니다.
const http = require('http');

// 2. 서버의 호스트 이름과 포트 번호를 설정합니다.
const hostname = '127.0.0.1'; // localhost와 동일. 내 컴퓨터를 의미합니다.
const port = 3000; // 서버가 요청을 기다릴 포트 번호. 다른 프로그램과 겹치지 않는 번호 사용.

// 3. HTTP 서버를 생성합니다.
// createServer 메소드는 요청(request)과 응답(response)을 다루는 콜백 함수를 인자로 받습니다.
const server = http.createServer((req, res) => {
  // 4. 클라이언트의 요청에 대한 응답을 설정합니다.
  res.statusCode = 200; // HTTP 상태 코드 200: 요청이 성공적으로 처리되었음을 의미합니다.
  res.setHeader('Content-Type', 'text/plain'); // 응답 헤더 설정: 내용이 일반 텍스트임을 알립니다.
  res.end('Hello, World!\n'); // 응답 본문 작성 및 전송 완료.
});

// 5. 설정된 hostname과 port에서 서버가 클라이언트의 요청을 기다리도록 합니다(서버 실행).
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});