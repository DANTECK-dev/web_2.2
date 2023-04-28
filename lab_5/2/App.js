const http = require('http');
const fs = require('fs');

// массив данных таблицы
const tableData = [
    {name: 'Товар 1', price: 100, quantity: 10},
    {name: 'Товар 2', price: 200, quantity: 5},
    {name: 'Товар 3', price: 300, quantity: 3},
];

// создаем сервер
const server = http.createServer((req, res) => {
    // устанавливаем заголовки для разрешения CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    console.log(req.url);
    if (req.method === 'GET') {
        // обрабатываем GET-запрос
        if (req.url === '/table') {
            console.log('Get table');
            // отправляем данные таблицы в формате JSON
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(tableData));
        } else if (req.url.startsWith('/table/')) {
            console.log('Get table into index');
            // обрабатываем запрос на получение данных по номеру строки
            const index = parseInt(req.url.substring(7)) - 1;
            if (isNaN(index) || index < 0 || index >= tableData.length) {
                // отправляем сообщение об ошибке, если номер строки некорректный
                res.statusCode = 400;
                res.end('Ошибка: некорректный номер строки');
            } else {
                // отправляем данные строки в формате JSON
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify(tableData[index]));
            }
        } else {
            console.log('Get index');
            // отправляем файл index.html для всех остальных GET-запросов
            fs.readFile('index.html', (err, data) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Ошибка сервера' + err);
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.statusCode = 200;
                    res.end(data);
                }
            });
        }
    } else if (req.method === 'POST') {
        console.log('post table');
        // обрабатываем POST-запрос на сохранение данных в файл
        if (req.url === '/save') {
            console.log('save');
            let body = '';
            req.on('data', (chunk) => {
                console.log('data ' + chunk);
                body += chunk.toString();
            });
            req.on('end', () => {
                // парсим данные из тела запроса
                const data = JSON.parse(body);
                // записываем данные в файл
                tableData.push(data);
                res.setHeader('Content-Type', 'text/html');
                //res.statusCode = 200;
                res.end('Успешно добавлено');
            });
        } else {
            res.statusCode = 404;
            res.end('Страница не найдена');
        }
    } else {
        res.statusCode = 405;
        res.setHeader('Allow', 'GET, POST');
        res.end('Метод не поддерживается');
    }
});

// запускаем сервер на порту 3000
server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});