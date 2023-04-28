const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// Создаем сервер
const server = http.createServer(function (req, res) {
    const { pathname, query } = url.parse(req.url, true);
    console.log(pathname);
    // Отображаем страницу с полем ввода и кнопками
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <html>
        <head>
          <title>5 Лаба</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        </head>
        <body>
          <h1>Введите текст:</h1>
          <input type="text" id="text-input" />
          <br />
          <button onclick="sendPostRequest()">Сохранить текст</button>
          <button onclick="sendGetRequest()">Получить текст</button>

          <script>
            // Функция для отправки POST-запроса
            function sendPostRequest() {
              const xhr = new XMLHttpRequest();
              xhr.open('POST', '/save', true);
              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              xhr.onload = function () {
                console.log(xhr.responseText);
              };
              xhr.send('text=' + document.getElementById('text-input').value);
            }

            // Функция для отправки GET-запроса
            function sendGetRequest() {
              const xhr = new XMLHttpRequest();
              xhr.open('GET', '/get', true);
              xhr.onload = function () {
                document.getElementById('text-input').value = xhr.responseText;
              };
              xhr.send();
            }
          </script>
        </body>
      </html>
    `);
    }

    // Скрипт для сохранения текста в файл
    else if (pathname === '/save' && req.method === 'POST') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            const postData = querystring.parse(body);
            const text = postData.text;
            fs.writeFile('text.txt', text, function (err) {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Text saved');
            });
        });
    }

    // Скрипт для получения текста из файла
    else if (pathname === '/get' && req.method === 'GET') {
        fs.readFile('text.txt', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }

    // Обработка всех остальных запросов
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');

    }
});

// Запускаем сервер на порту 8080
server.listen(3001, function () {
    console.log('Server is listening on port 3001');
});