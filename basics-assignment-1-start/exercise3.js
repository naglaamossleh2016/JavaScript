function double(num)
{
    let res=num*2
    return res;
}
function transform(number,funName){
    return funName(number);
}
let result=transform(10,double);
alert(result);