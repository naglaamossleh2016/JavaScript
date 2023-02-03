const task3Element = document.getElementById('task-3');

function Hello(){
    alert('Hello World!');
}
function HelloUser(name){
    alert('Hello '+name);
}
Hello();
HelloUser('Naglaa');
task3Element.addEventListener('click',Hello);

function fullName(firstName,middleName,lastName){
    return firstName+' '+middleName+' '+lastName;
}
let completeName=fullName('Naglaa','Abu Bakr',"Mossleh");
alert(completeName);