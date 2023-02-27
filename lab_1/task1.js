function SumMas(mas)
{
	let sum = 0
	if(mas !== undefined)
	{
		for(let i = 0; i < mas.length; i++)
		{
			sum += mas[i]
		}
		console.log(sum)
	}
	else
 	{
		console.log("Параметр не задан")
	}
	return sum
}
module.exports.SumMas = SumMas
//let mas = [1, 40 ,230]

//SumMas(mas)