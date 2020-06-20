// Task 1
var time = new Date();
document.write(time+"<br>");

// Task 2
var months = ["January","February","March","April","May","June","July", "August","September","October","November","December"]; 
var month = new Date().getMonth();
document.write(months[month]+"<br>");

// Task 3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 
var day = new Date().getDay();
document.write("Today is " + days[day]+"<br>");

// Task 4
var day = new Date().getDay();
if(day === 0 || day === 6){
document.write("It's Fun day"+"<br>");
}

// Task 5
var date = new Date().getDate();
if(date < 16){
document.write("First fifteen days of the month"+"<br>");
}
else{
    document.write("Last days of the month"+"<br>");
}

// Task 6
var millisDate = new Date().getTime();
document.write("Current Date: " + Date() +"<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisDate +"<br>");
document.write("Elapsed minutes since January 1, 1970: " + millisDate/(1000*60) +"<br>");

// Task 7
var hours = new Date().getHours();
if(hours<12){
    alert("It's AM");
}
else{
    alert("Its PM");
}

// Task 8
