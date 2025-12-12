//1
var arr = [4, 6, 5, 4, 2, 1,6,4]

var arr1 = []
var arr3 = []
cont = 0;
cont1 =0


arr.sort ((a,b)=>a-b)

console.log(arr)
for(let i = 0; i< arr.length; i++){
    if(arr[i] !==arr[i+1]){
        arr1.push(arr[i])
    }
}
console.log(arr1)






//2

var number = Math.floor(Number(prompt("introduce numero")))
while (number <= 0) {
    var number = Math.floor(Number(prompt("introduce un numero mayor que 0 ")))
}
console.log(number)
var array = []

while (number !== 0) {
    array.push(number)
    number = Math.floor(Number(prompt("introduce numeros")))
    while (number < 0) {
        var number =  Math.floor(Number(prompt(" solamente puedes intro ducir numeros mayores que 0 ")))

    }

}
console.log(array)

var suma=0
for(let i = 0; i< array.length; i++){
 suma+=array[i]
}
console.log(suma)





//3

var number = Number(prompt("introduce numero"))

var array1 =[]
var mul =0 ;

for(let i = 1; i<= 10; i++){
  mul =number*i
 array1.push(mul)
}
console.log(array1)




//4

var number = Number(prompt("introduce numero"))
var mul = 1;
for (let i = 1; i <= number; i++) {
    mul *= i;

}
console.log(mul)


//5

var number = Number(prompt("introduce numero"));
var i = 10
cont =1
while(number >= i){
  
    if (number >= i){
     cont ++
    }
      i*=10
}


console.log(cont)
