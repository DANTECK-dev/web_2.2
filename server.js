const PORT = 3000
const HOST = "localhost"
const express = require("express")
const hbs = require(`hbs`)
const app = express()
let Data = new Date();
//const path = require('path')
//const nodeCmd = require('node-cmd');
//const win32ole = require('win32ole');
//const exec = require('child_process').exec;
//const expbs = require('express-handlebars')
//const routes = require('./routes/handlers')
let fs = require('fs')

app.set(`view engine`, `hbs`)
app.set(`view options`, { layout: `layouts/layout`})
hbs.registerPartials(__dirname + `/views/partials`)
app.use(express.static(__dirname + `/public`))

app.use((request, response, next)=>{
    app.set(`views`, `views`)
    app.set(`view options`, { layout: `layouts/layout`})
    hbs.registerPartials(__dirname + `+/views/partials`)
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next()
})

app.get("/", (request, response) => {
    response.redirect("/index")
})

app.get("/index(.html?)?", (request, response) => {
    response.render("index.hbs", {
        title: "Главная навигации",
        labs_max: [
            ['Лабораторная работа №1', 'L1'],
            ['Лабораторная работа №2', 'L2'],
            ['Лабораторная работа №3', 'L3'],
            ['Лабораторная работа №4', 'L4'],
            ['Лабораторная работа №5', 'L5'],
            ['Лабораторная работа №6', 'L6'],
            ['Лабораторная работа №7', 'L7'],
            ['Лабораторная работа №8', 'L8'],
            ['Лабораторная работа №9', 'L9'],
            ['Лабораторная работа №10', 'L10'],
            ['Лабораторная работа №11', 'L11'],
            ['Лабораторная работа №12', 'L12'],
            ['Лабораторная работа №13', 'L13'],
            ['Лабораторная работа №14', 'L14'],
            ['Лабораторная работа №15', 'L15']
        ],
        labs_min: [
            ['ЛР 1','L1'],
            ['ЛР 2','L2'],
            ['ЛР 3','L3'],
            ['ЛР 4','L4'],
            ['ЛР 5','L5'],
            ['ЛР 6','L6'],
            ['ЛР 7','L7'],
            ['ЛР 8','L8'],
            ['ЛР 9','L9'],
            ['ЛР 10', 'L10'],
            ['ЛР 11', 'L11'],
            ['ЛР 12', 'L12'],
            ['ЛР 13', 'L13'],
            ['ЛР 14', 'L14'],
            ['ЛР 15', 'L15']
        ]
    })

})

app.get('/L1(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №1",
        labs_max: [
            ['Задание №1', 'Q1.1'],
            ['Задание №2', 'Q1.2'],
            ['Задание №3', 'Q1.3']
        ],
        labs_min: [
            ['З №1', 'Q1.1'],
            ['З №2', 'Q1.2'],
            ['З №3', 'Q1.3']
        ]
    })
})
app.get('/Q1.1(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №1 Задание №1",
        labs_max: [
            ['Сумма массива [38,865,42,86,221,7,5] - '
            + require('./lab_1/task1').SumMas([38,865,42,86,221,7,5]), '/']
        ],
        labs_min: [
            ['Сумма массива [38,865,42,86,221,7,5] - '
            + require('./lab_1/task1').SumMas([38,865,42,86,221,7,5]), '/']
        ]
    })
})
app.get('/Q1.2(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №1 Задание №2",
        labs_max: [
            ['Факториал числа 50 - ' + require('./lab_1/task2').Fact(50), '/']
        ],
        labs_min: [
            ['Факториал числа 50 - ' + require('./lab_1/task2').Fact(50), '/']
        ]
    })
})
app.get('/Q1.3(.html?)?', (request, response) => {
    let count = 9
    let mas = require('./lab_1/task3/app').appjs(count)
    let mass = []
    for(let i = 0; i < count; i++)
        mass[i] = [mas[i], '/']
    console.log(mass)
    response.render("index.hbs", {
        title: "Лабораторная работа №1 Задание №3",
        labs_max: mass,
        labs_min: mass
    })
})


app.get('/L2(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №2",
        labs_max: [
            ['Задание №1', 'Q2.1'],
            ['Задание №2', 'Q2.2'],
            ['Задание №3', 'Q2.3'],
            ['Индивидуальное задание', 'I2']
        ],
        labs_min: [
            ['З №1', 'Q2.1'],
            ['З №2', 'Q2.2'],
            ['З №3', 'Q2.3'],
            ['ИЗ', 'I2']
        ]
    })
})
app.get('/Q2.1(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №2 Задание №1",
        labs_max: [
            ['Чтение файла data - '
            + require('./lab_2/general/1/core').data(), '/']
        ],
        labs_min: [
            ['Чтение файла data - '
            + require('./lab_2/general/1/core').data(), '/']
        ]
    })
})
app.get('/Q2.2(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №2 Задание №2",
        labs_max: [
            ['Главная', 'lab_2/general/2/index.html'],
            ['Контент', 'lab_2/general/2/content.html'],
            ['Информация', 'lab_2/general/2/info.html']
        ],
        labs_min: [
            ['Главная', 'lab_2/general/2/index.html'],
            ['Контент', 'lab_2/general/2/content.html'],
            ['Информация', 'lab_2/general/2/info.html']
        ]
    })
})
app.get('/Q2.3(.html?)?', (request, response) => {
    let count = 9
    let mas = require('./lab_1/task3/app').appjs(count)
    let mass = []
    for(let i = 0; i < count; i++)
        mass[i] = [mas[i], '/']
    console.log(mass)
    response.render("index.hbs", {
        title: "Лабораторная работа №2 Задание №3",
        labs_max: mass,
        labs_min: mass
    })
})
app.get('/I2(.html?)?', (request, response) => {
    let count = 9
    let mas = require('./lab_1/task3/app').appjs(count)
    let mass = []
    for(let i = 0; i < count; i++)
        mass[i] = [mas[i], '/']
    console.log(mass)
    response.render("index.hbs", {
        title: "Лабораторная работа №1 Задание №3",
        labs_max: mass,
        labs_min: mass
    })
})

app.get('/L3(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №3",
        labs_max: [
            ['Задание №1 (home)', 'Q3.1'],
            ['Задание №1 (contact)', 'Q3.1/contact'],
            ['Задание №2', 'Q3.2'],
            ['Задание №3', 'Q3.3'],
            ['Задание №4', 'Q3.4']
        ],
        labs_min: [
            ['З №1 (h)', 'Q3.1'],
            ['З №1 (c)', 'Q3.1/contact'],
            ['З №2', 'Q3.2'],
            ['З №3', 'Q3.3'],
            ['З №4', 'Q3.4']
        ]
    })
})
app.get('/Q3.1(.html?)?(/home)?', (request, response) =>{
    response.send("<h1>Главная страница</h1>");
})
app.get('/Q3.1(.html?)?/contact', (request, response) => {
    response.send(`<p>Немеров А.П.</p>`)
})
app.get('/Q3.2(.html?)?', (request, response) => {
    let count = 9
    let mas = require('./lab_1/task3/app').appjs(count)
    let mass = []
    for(let i = 0; i < count; i++)
        mass[i] = [mas[i], '/']
    console.log(mass)
    response.render("index.hbs", {
        title: "Лабораторная работа №2 Задание №3",
        labs_max: mass,
        labs_min: mass
    })
})
app.get('/Q3.3(.html?)?', (request, response) => {
    let count = 9
    let mas = require('./lab_1/task3/app').appjs(count)
    let mass = []
    for(let i = 0; i < count; i++)
        mass[i] = [mas[i], '/']
    console.log(mass)
    response.render("index.hbs", {
        title: "Лабораторная работа №2 Задание №3",
        labs_max: mass,
        labs_min: mass
    })
})
app.get('/Q3.4(.html?)?', (request, response) => {
    let count = 9
    let mas = require('./lab_1/task3/app').appjs(count)
    let mass = []
    for(let i = 0; i < count; i++)
        mass[i] = [mas[i], '/']
    console.log(mass)
    response.render("index.hbs", {
        title: "Лабораторная работа №2 Задание №3",
        labs_max: mass,
        labs_min: mass
    })
})

app.get('/L4(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №4",
        labs_max: [
            ['Задание №1', 'Q4.1'],
            ['Задание №2', 'Q4.2'],
            ['Задание №3', 'Q4.3'],
            ['Задание №4', 'Q4.4'],
            ['Индивидуальное задание', 'I4']
        ],
        labs_min: [
            ['З №1', 'Q4.1'],
            ['З №2', 'Q4.2'],
            ['З №3', 'Q4.3'],
            ['З №4', 'Q4.4'],
            ['ИЗ', 'I4']
        ]
    })
})

app.get('/L5(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №5",
        labs_max: [
            ['Задание №1', 'Q5.1'],
            ['Задание №2', 'Q5.2']
        ],
        labs_min: [
            ['З №1', 'Q5.1'],
            ['З №2', 'Q5.2']
        ]
    })
})

app.get('/L6(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №6",
        labs_max: [
            ['Задание №1', 'Q6.1'],
            ['Задание №2', 'Q6.2'],
            ['Индивидуальное задание', 'I6']
        ],
        labs_min: [
            ['З №1', 'Q6.1'],
            ['З №2', 'Q6.2'],
            ['ИЗ', 'I6']
        ]
    })
})

app.get('/L7(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №7",
        labs_max: [
            ['Задание №1', 'Q7.1'],
            ['Задание №1-2', 'Q7.1-2']
        ],
        labs_min: [
            ['З №1', 'Q7.1'],
            ['З №1-2', 'Q7.1-2']
        ]
    })
})

app.get('/L8(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №8",
        labs_max: [
            ['Задание №1', 'Q8.1'],
            ['Задание №2', 'Q8.2'],
            ['Задание №3', 'Q8.3'],
            ['Индивидуальное задание', 'I8']
        ],
        labs_min: [
            ['З №1', 'Q8.1'],
            ['З №2', 'Q8.2'],
            ['З №3', 'Q8.3'],
            ['ИЗ', 'I8']
        ]
    })
})

app.get('/L9(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №9",
        labs_max: [
            ['Задание №1', 'Q9.1'],
            ['Задание №2', 'Q9.2'],
            ['Задание №3', 'Q9.3'],
            ['Задание №4', 'Q9.4']
        ],
        labs_min: [
            ['З №1', 'Q9.1'],
            ['З №2', 'Q9.2'],
            ['З №3', 'Q9.3'],
            ['З №4', 'Q9.4']
        ]
    })
})

app.get('/L10(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №10",
        labs_max: [
            ['Задание №1', 'Q10.1'],
            ['Задание №2', 'Q10.2'],
            ['Задание №3', 'Q10.3']
        ],
        labs_min: [
            ['З №1', 'Q10.1'],
            ['З №2', 'Q10.2'],
            ['З №3', 'Q10.3']
        ]
    })
})

app.get('/L11(.html?)?', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №11",
        labs_max: [
            ['Задание №1', 'Q11.1'],
            ['Задание №2', 'Q11.2']
        ],
        labs_min: [
            ['З №1', 'Q11.1'],
            ['З №2', 'Q11.2']
        ]
    })
})

/*
app.get('/L12', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №12",
        labs_max: [
            ['Задание №1', 'Q2.1'],
            ['Задание №2', 'Q2.2'],
            ['Задание №3', 'Q2.3'],
            ['Индивидуальное задание', 'I2']
        ],
        labs_min: [
            ['З №1', 'Q2.1'],
            ['З №2', 'Q2.2'],
            ['З №3', 'Q2.3'],
            ['ИЗ', 'I2']
        ]
    })
})

app.get('/L13', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №13",
        labs_max: [
            ['Задание №1', 'Q2.1'],
            ['Задание №2', 'Q2.2'],
            ['Задание №3', 'Q2.3'],
            ['Индивидуальное задание', 'I2']
        ],
        labs_min: [
            ['З №1', 'Q2.1'],
            ['З №2', 'Q2.2'],
            ['З №3', 'Q2.3'],
            ['ИЗ', 'I2']
        ]
    })
})

app.get('/L14', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №14",
        labs_max: [
            ['Задание №1', 'Q2.1'],
            ['Задание №2', 'Q2.2'],
            ['Задание №3', 'Q2.3'],
            ['Индивидуальное задание', 'I2']
        ],
        labs_min: [
            ['З №1', 'Q2.1'],
            ['З №2', 'Q2.2'],
            ['З №3', 'Q2.3'],
            ['ИЗ', 'I2']
        ]
    })
})

app.get('/L15', (request, response) => {
    response.render("index.hbs", {
        title: "Лабораторная работа №15",
        labs_max: [
            ['Задание №1', 'Q2.1'],
            ['Задание №2', 'Q2.2'],
            ['Задание №3', 'Q2.3'],
            ['Индивидуальное задание', 'I2']
        ],
        labs_min: [
            ['З №1', 'Q2.1'],
            ['З №2', 'Q2.2'],
            ['З №3', 'Q2.3'],
            ['ИЗ', 'I2']
        ]
    })
})
*/

//app.use(express.static('./errs'));
app.get('/*', (request, response) => {
    app.set(`views`, `views`)
    app.set(`view options`, { layout: `layouts/error`})
    hbs.registerPartials(__dirname + `+/views/partials`)
    response.render("error.hbs", {
        error_code: 404,
        error_text: 'NOT FOUND'
    })
})

app.listen(PORT, HOST, ()=>{console.log(`Server started on ${HOST}:${PORT}`)});