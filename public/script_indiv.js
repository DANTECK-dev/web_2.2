window.onload = function () {
    let debug = false

    class Table {
        matrix

        constructor() {
            this.Reload()
        }

        GetTable() {
            //alert(this.matrix)
            let str = "<tbody>"
            for (let row = 0; row < this.matrix.length; row++) {
                str += `<tr>`
                let rows = this.matrix[row]
                for (let col = 0; col < rows.length; col++) {
                    if (this.matrix[row][col].indexOf("@#strong#@") >= 0) {
                        str += `<td><strong>` + this.matrix[row][col].replace("@#strong#@", "") + `</strong></td>`
                        continue
                    }

                    if (this.matrix[row][col].indexOf("@#3#@") >= 0) {
                        str += `<td align="center" colspan="3">` + this.matrix[row][col].replace("@#3#@", "") + `</td>`
                        break
                    } else if (this.matrix[row][col].indexOf("@#2#@") >= 0) {
                        str += `<td align="center" colspan="2">` + this.matrix[row][col].replace("@#2#@", "") + `</td>`
                        break
                    }
                    str += `<td align="center">` + this.matrix[row][col] + `</td>`
                }
                str += `</tr>`
            }
            return (str + `</tbody>`)
        }

        Reload() {
            if (debug) {
                alert("after reload")
                alert("this.matrix" + this.matrix)
                alert("JSON.parse(localStorage.getItem(matrix))" + JSON.parse(localStorage.getItem('matrix')))
            }

            if (JSON.parse(localStorage.getItem('matrix')) === undefined || JSON.parse(localStorage.getItem('matrix')) === null) {
                if (debug) alert("empty")
                this.matrix = [
                    ["@#3#@Одноплатный мини-ПК Raspberry Pi"],
                    [" ", "@#strong#@Model A", "@#strong#@Model B"],
                    ["@#strong#@Цена", "$25", "$35"],
                    ["@#strong#@System-on-a-chip (SoC)", "@#2#@Broadcom BCM2835 (CPU + GPU)"],
                    ["@#strong#@CPU", "@#2#@700 МГц ARM11 (ядро ARM1176JZF-S), возможен разгон до 1 ГГц"],
                    ["@#strong#@GPU", "@#2#@Broadcom VideoCore IV"],
                    ["@#strong#@Стандарты", "@#2#@OpenGL ES 1.1/2.0, OpenVG 1.1, Open EGL, OpenMAX"],
                    ["@#strong#@Аппаратные кодеки", "@#2#@H.264 (1080p30, high-profile); MPEG-2 и VC-1 (лицензия продаётся отдельно)"],
                    ["@#strong#@Память (SDRAM, общая)", "@#2#@256 Мбайт", "512 Мбайт; 256 Мбайт (до 15.10.2012)"],
                    ["@#strong#@Порты USB 2.0", "1", "2"],
                    ["@#strong#@Видеовыход", "@#2#@1 x HDMI 1.3a (CEC), 1 x RCA (576i/480i, PAL-BGHID/M/N,NTSC, NTSC-J)"],
                    ["@#strong#@Аудиовыход", "@#2#@Гнездо 3,5 мм, HDMI", ""],
                    ["@#strong#@Карт-ридер", "@#2#@SD/MMC/SDIO"],
                    ["@#strong#@Сеть", "-", "Ethernet-порт RJ45 10/100 Мбит/с"],
                    ["@#strong#@Интерфейсы", "@#2#@20 x GPIO (SPI, I^(2)C, UART, TTL); MIPI CSI-2, MIPI DSI"],
                    ["@#strong#@Энергопотребление", "500 мА (2,5 Вт)", "700 мА (3,5 Вт)"],
                    ["@#strong#@Питание", "@#2#@5 В через порт micro-USB или GPIO"],
                    ["@#strong#@Размеры", "@#2#@85,6x56x21 мм"],
                    ["@#strong#@Масса", "@#2#@54 г"]
                ]
                localStorage.setItem('matrix', JSON.stringify(this.matrix))
            } else {
                this.matrix = JSON.parse(localStorage.getItem('matrix'))
            }

            if (debug) {
                alert("before reload")
                alert("this.matrix" + this.matrix)
                alert("JSON.parse(localStorage.getItem(matrix))" + JSON.parse(localStorage.getItem('matrix')))
            }
        }

        Save() {
            if (debug) {
                alert("after save")
                alert("this.matrix" + this.matrix)
                alert("JSON.parse(localStorage.getItem(matrix))" + JSON.parse(localStorage.getItem('matrix')))
            }

            if (this.matrix === undefined || this.matrix === null)
                this.Reload()
            else {
                localStorage.setItem('matrix', JSON.stringify(this.matrix))
            }

            if (debug) {
                alert("before save")
                alert("this.matrix" + this.matrix)
                alert("JSON.parse(localStorage.getItem(matrix))" + JSON.parse(localStorage.getItem('matrix')))
            }
        }
    }

    let table = new Table()

    if (document.getElementById('table') !== null) {
        document.getElementById('table').innerHTML = table.GetTable()
        document.getElementById('Button_Table_Save').addEventListener("click", function (e) {
            e.preventDefault();
            let form = document.forms.Input_Table
            let header = form.elements.Input_Table_Header.value
            let input_1 = form.elements.Input_Table_1_Column.value
            let input_2 = form.elements.Input_Table_2_Column.value
            if (header.trim() === "") {
                alert("Введите заголовок")
                return
            }
            if (input_1.trim() === "" && input_2.trim() === "") {
                alert("Введите хотя-бы один столбец")
                return
            }
            let str
            if (input_1.trim() === "" || input_2.trim() === "") {
                str = ["@#strong#@" + header, "@#2#@" + input_1 + input_2]
            } else {
                str = ["@#strong#@" + header, input_1, input_2]
            }
            table.matrix.push(str)
            if (debug) alert(table.matrix)
            table.Save()
            document.getElementById('table').innerHTML = table.GetTable()
        })
        document.getElementById('Button_Table_Delete').addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.clear()
            table.Reload()
            document.getElementById('table').innerHTML = table.GetTable()
        })
    }

    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);

    let Closed_AD = true

    // закрытие рекламы
    document.querySelector('#Close_AD').addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('disable_backround').style.display = 'none'
        document.getElementById('disable_content').style.display = 'block'
        Closed_AD = true
    })

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    class Link {
        hyperlink
        tooltip
        color

        constructor(link, tooltip, color) {
            this.hyperlink = link
            this.tooltip = tooltip
            this.color = color
        }

        GetHTML() {
            return `<a title='` + this.tooltip + `' href='` + this.hyperlink + `' class='` + this.color + `'>Забыли пароль?</a>`
        }
    }

    let links = [
        new Link("index.html", "Робототехника", "blue"),
        new Link("arduino.html", "Arduino", "red"),
        new Link("raspberry.html", "Raspberry", "green")
    ]

    const rand_link = links[getRandomInt(0, 3)]
    document.getElementById("rand_link").innerHTML = rand_link.GetHTML()

    function changeColor(day) {
        if (day) {
            console.log("сейчас день")
            document.body.style.background = '#fff';
            document.getElementsByClassName("navbar-inverse").item(0).style.borderColor = '#000'
            document.getElementsByClassName("panel-body").item(0).style.background = '#f9f9f9'
            document.getElementsByClassName("panel-body").item(1).style.background = '#f9f9f9'
            document.getElementsByClassName("panel-body").item(2).style.background = '#f9f9f9'
            let n = document.getElementsByClassName("width")
            for (let i = 0; i < n.length; i++) {
                n.item(i).style.color = '#111'
                n.item(i).style.background = '#fdfdfd'
            }
            let mark = document.getElementsByClassName("mark")
            for (let i = 0; i < mark.length; i++) {
                mark.item(i).style.color = '#af5508'
            }
            let a = document.getElementsByTagName("p")
            for (let i = 0; i < a.length; i++) {
                a.item(i).style.color = '#222'
            }
            let table = document.getElementsByTagName("table")
            for (let i = 0; i < table.length; i++) {
                table.item(i).style.color = '#222'
            }
            document.getElementsByTagName("footer").item(0).style.borderColor = '#000'
            document.getElementsByClassName('AD').item(0).style.backgroundColor = '#fdfdfd'
        } else {
            console.log("сейчас ночь")
            document.body.style.background = '#222';
            document.getElementsByClassName("navbar-inverse").item(0).style.borderColor = '#f9f9f9'
            document.getElementsByClassName("panel-body").item(0).style.background = '#333'
            document.getElementsByClassName("panel-body").item(1).style.background = '#333'
            document.getElementsByClassName("panel-body").item(2).style.background = '#333'
            let n = document.getElementsByClassName("width")
            for (let i = 0; i < n.length; i++) {
                n.item(i).style.color = '#aaa'
                n.item(i).style.background = '#313031'
            }
            let mark = document.getElementsByClassName("mark")
            for (let i = 0; i < mark.length; i++) {
                mark.item(i).style.color = 'lightsalmon'
            }
            let a = document.getElementsByTagName("p")
            for (let i = 0; i < a.length; i++) {
                a.item(i).style.color = '#aaa'
            }
            let table = document.getElementsByTagName("table")
            for (let i = 0; i < table.length; i++) {
                table.item(i).style.color = '#aaa'
            }
            document.getElementsByTagName("footer").item(0).style.borderColor = '#f9f9f9'
            document.getElementsByClassName('AD').item(0).style.backgroundColor = '#222'
        }
        return !day
    }

    let arr = []
    //document.querySelector('#search_button').addEventListener("click", function (e) {
    //    let input = document.getElementById('search_input')
    //    alert(input.value)
    //    if (input.value === "") {
    //        alert("А где!?")
    //        return
    //    }
    //    arr.push(input.value)
    //    alert(arr)
    //});

    let now = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = "Текущее время: " + now.toLocaleTimeString().split(':')[0] + ":" + now.toLocaleTimeString().split(':')[1];
    let hour = parseInt(now.toLocaleTimeString().split(':')[0])
    let day = hour > 7 && hour < 21;
    day = changeColor(day)

    if (!day) {
        clock = document.getElementById("clock").innerHTML =
            +String(now.getDate()).padStart(2, '0') + "/"
            + String(now.getMonth() + 1).padStart(2, '0') + "/"
            + now.getFullYear()
            + " Текущее время: "
            + now.toLocaleTimeString().split(':')[0]
            + ":"
            + now.toLocaleTimeString().split(':')[1]
            + " Включена дневная тема";
    } else {
        clock = document.getElementById("clock").innerHTML =
            +String(now.getDate()).padStart(2, '0') + "/"
            + String(now.getMonth() + 1).padStart(2, '0') + "/"
            + now.getFullYear()
            + " Текущее время: "
            + now.toLocaleTimeString().split(':')[0]
            + ":"
            + now.toLocaleTimeString().split(':')[1]
            + " Включена ночная тема";
    }

    window.setInterval(function () {
        now = new Date();
        hour = parseInt(now.toLocaleTimeString().split(':')[0])
        console.log(now.toLocaleTimeString())
        if ((hour > 7 && hour < 21) && day === true) {
            console.log("смена на день " + hour + " час " + day)
            day = changeColor(day)
        }
        if (!(hour > 7 && hour < 21) && day === false) {
            console.log("смена на ночь " + hour + " час " + day)
            day = changeColor(day)
        }
        if (!day) {
            clock = document.getElementById("clock").innerHTML =
                +String(now.getDate()).padStart(2, '0') + "/"
                + String(now.getMonth() + 1).padStart(2, '0') + "/"
                + now.getFullYear()
                + " Текущее время: "
                + now.toLocaleTimeString().split(':')[0]
                + ":"
                + now.toLocaleTimeString().split(':')[1]
                + " Включена дневная тема";
        } else {
            clock = document.getElementById("clock").innerHTML =
                +String(now.getDate()).padStart(2, '0') + "/"
                + String(now.getMonth() + 1).padStart(2, '0') + "/"
                + now.getFullYear()
                + " Текущее время: "
                + now.toLocaleTimeString().split(':')[0]
                + ":"
                + now.toLocaleTimeString().split(':')[1]
                + " Включена ночная тема";
        }
        if (Closed_AD) {
        //if (false) {
            let AD = getRandomInt(0, 10) === 3
            console.log(AD)
            if (AD) {
                const settings_img = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1",
                    "method": "GET",
                    "headers": {
                        "X-RapidAPI-Key": "340c10a1f2msh9c9e46a7c557a58p1b3528jsn299db424285d",
                        "X-RapidAPI-Host": "hargrimm-wikihow-v1.p.rapidapi.com"
                    }
                };

                $.ajax(settings_img).done(function (response_img) {
                    //alert(response["1"])
                    let img = `<img src=${response_img["1"]} alt="ad_image" style="width: 100%;border-radius: 15px;margin:auto;border: 0; background: lightgray; padding: 10px;"></img>`

                    const settings_header = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=1",
                        "method": "GET",
                        "headers": {
                            "X-RapidAPI-Key": "340c10a1f2msh9c9e46a7c557a58p1b3528jsn299db424285d",
                            "X-RapidAPI-Host": "hargrimm-wikihow-v1.p.rapidapi.com"
                        }
                    };

                    $.ajax(settings_header).done(function (response_header) {
                        //alert(response["1"])
                        let header = `<h2>${response_header["1"]}</h2>`;

                        const settings_text = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://baconator-bacon-ipsum.p.rapidapi.com/?type=all-meat&paras=1",
                            "method": "GET",
                            "headers": {
                                "X-RapidAPI-Key": "340c10a1f2msh9c9e46a7c557a58p1b3528jsn299db424285d",
                                "X-RapidAPI-Host": "baconator-bacon-ipsum.p.rapidapi.com"
                            }
                        };
                        $.ajax(settings_text).done(function (response_text) {
                            //alert(response_text)
                            let text = `<p style="color: #cacaca; padding: 15px;">${response_text[0]}</p>`

                            //alert(response)
                            document.getElementById('Close_AD').disabled = true
                            document.getElementById('Close_AD').style.animation = 'mov_close_ad infinite 15s ease-out'
                            window.setTimeout(function () {
                                document.getElementById('Close_AD').disabled = false
                                document.getElementById('Close_AD').style.animation = 'none'
                            }, 15 * 1000)
                            document.getElementById('AD_Content').innerHTML = img + header + text
                            document.getElementById('disable_backround').style.display = 'block'
                            document.getElementById('disable_content').style.display = 'none'
                            AD = false
                            Closed_AD = false
                            //alert("done")
                        });
                    })
                });
            }
        }
    }, 1000);

    let descriptions = [
        "Робототехника, " +         // роботехника(index.html)
        "Что такое роботехника, " +
        "Основы робототехники, " +
        "Классы роботов, " +
        "Компоненты роботов, " +
        "Способы перемещения, " +
        "Способы управления, " +
        "Подвиды современных роботов",

        "Ардуино, " +               // Arduino(arduino.html)
        "Что такое Arduino?, " +
        "Железо (аппаратная часть), " +
        "Софт (программная часть), " +
        "Программирование, " +
        "Библиотеки, " +
        "Чистый Си? Писать без библиотек?, " +
        "Возможности, " +
        "Хейтеры платформы, " +
        "Полезные страницы",

        "Raspberry Pi, " +          // Raspberry Pi(raspberry.html)
        "Малина Пи, " +
        "История Raspberry Pi, " +
        "Технические характеристики и возможности, " +
        "Базовая настройка, " +
        "Настройка BitTorrent Sync, " +
        "Заключение"
    ]

    let index = 0
    window.setInterval(function () {
        document.getElementById('Description').innerText = descriptions[index]
        index++
        if (index > 2) index = 0
    }, 5 * 1000)

    document.getElementById('Button_Search_visible').addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('Result_Found_Visible').innerHTML = ""
        let input = document.getElementById('Input_Search_visible')
        if(input.value === "") return
        for (let j = 0; j < descriptions.length; j++) {
            if (new RegExp(input.value.trim().toLowerCase()).test(descriptions[j].trim().toLowerCase())) {
                document.getElementById('Result_Found_Visible').innerHTML += `<a href=${links[j].hyperlink}>${links[j].tooltip}</a>`
            }
        }
    })

    document.getElementById('Button_Search_hidden').addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('Result_Found_Hidden').innerHTML = ""
        let input = document.getElementById('Input_Search_hidden')
        if(input.value === "") return
        for (let j = 0; j < descriptions.length; j++) {
            if (new RegExp(input.value.trim().toLowerCase()).test(descriptions[j].trim().toLowerCase())) {
                document.getElementById('Result_Found_Hidden').innerHTML += `<a href=${links[j].hyperlink}>${links[j].tooltip}</a>`
            }
        }
    })

    //window.addEventListener('scroll', event => {
    //    let navigationLinks = document.querySelectorAll('#left_menu li a');
    //    let fromTop = window.scrollY;
    //    //console.log(fromTop)
    //    navigationLinks.forEach(link => {
    //        let section = document.getElementsByClassName(link.hash.replace('#',''))
    //        console.log(section)
    //        if (
    //            section.offsetTop <= fromTop &&
    //            (section.offsetTop + section.offsetHeight) > fromTop
    //        ) {
    //            console.log("add active")
    //            link.classList.add('active_menu');
    //        } else {
    //            console.log("remove active")
    //            link.classList.remove('active_menu');
    //        }
    //    });
    //});

}
