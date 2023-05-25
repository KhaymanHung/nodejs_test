// 引入內建的 http 和 querystring 模組
const http = require('http');
const querystring = require('querystring');

// 建立伺服器物件
server = http.createServer((req, res) => {
    // 解析 URL 參數
    let urlParams = querystring.parse(req.url.slice(req.url.indexOf('?') + 1));

    // 取得路徑的值
    let url = req.url.slice(0, req.url.indexOf('?'));

    // 取得 a 參數的值
    let a = urlParams.a;

    // 設定 HTTP 標頭
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 根據 a 的值回傳不同的回應
    if (req.url === '/') {
    res.end('Hello, World!\n');
    } else if (url === '/test' && a === '0') {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    } else if (url === '/test' && a === '1') {
        res.statusCode = 500;
        res.end('Error\n');
    } else if (url === '/test' && a === '2') {
        res.statusCode = 200;
        res.end('OK\n');
    } else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }
});

// 監聽在本機的 3000 連接埠
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
