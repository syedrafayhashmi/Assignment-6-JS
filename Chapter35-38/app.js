// Task 1
function dateTime(){
    time = new Date();
    return document.write(time+"<br>");
}
//dateTime();

// Task 2
function greet(){
   var first = prompt("Enter First Name")+" ";
   var last = prompt("Enter Last Name");
   var fullName = first.concat(last)
   return document.write("Hello "+fullName+"<br>");
}
//greet();

// Task 3
function sum(){
    var num1 = +prompt("Enter number 1");
    var num2 = +prompt("Enter number 2");
    return document.write(num1+num2);
}
//sum();

// Task 4
function calculator(num1,num2,operator){
     if(operator === "+"){
        return document.write(num1+num2);   
    }
    if(operator === "-"){
        return document.write(num1-num2);
    }
    if(operator === "*"){
        return document.write(num1*num2);
    }
    if(operator === "/"){
        return document.write(num1/num2);
    }
    if(operator === "%"){
        return document.write(num1%num2);
    }
    else{
        return document.write("Wrong Input");
    }
}
//calculator(5,4,"+");
//calculator(40,8,"/");
//calculator(5,4,"*");

// Task 5
function square(num){
    
}