const Worker = require("./worker")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Funk(N)
{
    let name = ["Денис", "Бальжинима", "Никита", "Слава", "Андрей"]
    let surname = ["Мисюркеев", "Манхаев", "Лихачев", "Васильев", "Лебедев"]
    let posts = ["Менеджер", "Директор", "Продавец", "Меркетолог", "Разработчик"]

    let peplz = []

    if(N === undefined || N === 0) N=1;

    for(let i = 0; i < N; i++)
    {
        let rand_name = name[getRandomInt(0, name.length)]
        let rand_surname = surname[getRandomInt(0, surname.length)]
        let rand_post = posts[getRandomInt(0, posts.length)]
        let rand_exp = getRandomInt(0, 30)

        peplz[i] = new Worker(rand_name, rand_surname, rand_post, rand_exp)
    }

    return peplz
}

module.exports = Funk
