function Worker(name, surname, post, exp)
{
    this.name = name;
    this.surname = surname;
    this.post = post;
    this.exp = exp;
    this.show = function()
    {
        return `Имя Фамилия: ${name} ${surname} Должность: ${post} Стаж: ${exp}`
    }
}

module.exports = Worker;