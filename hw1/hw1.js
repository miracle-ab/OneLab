const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cities = [
  { name: "Almaty", code: "ALA" },
  { name: "Nursultan", code: "AST"},
  { name: "Shymkent", code: "SHY" },
  { name: "Aktau", code: "AKT" },
  { name: "Atyrau", code: "ATY" },
  { name: "Karaganda", code: "KAR" },
  { name: "Kyzylorda", code: "KZY" },
  { name: "Pavlodar", code: "PAV" },
];

// 1)Дан массив numbersList. С помощью метода filter выведите отфильтрованный массив с четными числами.
const evenNumbers = numbersList.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 2)Дан массив numbersList. С помощью метода filter выведите отфильтрованный массив с нечетными числами.
const oddNumbers = numbersList.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// 3)Дан список городов cities. С помощью метода filter выведите отфильтрованный список городов, которые начинаются с буксы K.
const citiesStartWithK = cities.filter(city => city.name.startsWith("K"));
console.log(citiesStartWithK);

// 4)Дан список городов cities. С помощью метода map выведите список названия городов.
const citiesNames = cities.map(city => city.name);
console.log(citiesNames);

// 5)Дан массив numbersList. С помощью цикла for найдите произведение элементов этого массива.
let multiplyNums = 1;
for(let i = 0; i < numbersList.length; i++){
  multiplyNums *= numbersList[i];
}
console.log(multiplyNums);

// 6)Дан массив numbersList. С помощью метода reduce найдите произведение элементов этого массива.
const multiplyNums2 = numbersList.reduce( (prev, curr) => prev * curr);
console.log(multiplyNums2);

// 7)Дан массив numbersList. С помощью метода reduce найдите сумму элементов этого массива.
const sumNums = numbersList.reduce( (prev, curr) => prev + curr);
console.log(sumNums);

/*
8)Дан список городов cities. С помощью метода reduce выведите объект следующего вида:
{
  ‘AST’: ‘Nursultan’,
  ‘ALA’: ‘Almaty’,
   ...
}
*/

const citiesNewObj = cities.reduce((prev, curr) => {
  prev[curr.code] = curr.name;
  return prev;
}, {});
console.log(citiesNewObj);