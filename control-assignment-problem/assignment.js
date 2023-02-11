const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber=Math.random();
if(randomNumber>=0.7)
{
    alert("Random value greater than 0.7");
}
let arrayOfNum=[2,4,6,8,10];
for(let i=0;i<arrayOfNum.length;i++)
{
    console.log(arrayOfNum[i]);
}
let i=0;
while(i<arrayOfNum.length)
{
    console.log(arrayOfNum[i]);
    i++;
}
for(let i=arrayOfNum.length-1;i>=0;i--){
    console.log(arrayOfNum[i]);
}
if(randomNumber>=0.7 && anotherRandomNumber >=0.7 || randomNumber <= 0.2 || anotherRandomNumber <= 0.2)
{
    alert("is this condetion met")
    console.log(randomNumber);
    console.log(anotherRandomNumber);
}