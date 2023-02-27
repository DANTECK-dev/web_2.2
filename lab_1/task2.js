function Fact(num)
{
    let result = 0
    if(num === undefined)
    {
        console.log("Число не задано")
        return
    }
    else if(num === 0)
    {
        result = 1
    }
    else
    {
        result = 1
        for(let i = 2; i <= num; i++)
        {
            result = result * i
        }
    }
    console.log(result)
    return result
}   

module.exports.Fact = Fact

//let myNum = process.argv[2];

//Fact(myNum)
