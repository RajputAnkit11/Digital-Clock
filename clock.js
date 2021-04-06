var hr=document.getElementById("hr");
var min=document.getElementById("min");
var sec=document.getElementById("sec");
var pr=document.getElementById("period");

var wd=document.getElementById("wd");
var dt=document.getElementById("dt");
var mm=document.getElementById("mm");
var yr=document.getElementById("yr");

var weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September	", "October", "November", "December"]
setInterval(clock);

function clock(){
    var date=new Date();
    hr.innerHTML=date.getHours();
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();

    if(hr.innerHTML>11){
        pr.innerHTML="pm";
        hr.innerHTML=hr.innerHTML-12;
    }
    else{
        pr.innerHTML="am"
    }

    if(sec.innerHTML<10){
        sec.innerHTML="0"+sec.innerHTML;
    }
    if(min.innerHTML<10){
        min.innerHTML="0"+min.innerHTML;
    }
    if(hr.innerHTML<10){
        hr.innerHTML="0"+hr.innerHTML;
    }

    dt.innerHTML=date.getDate();
    yr.innerHTML=date.getFullYear();

    wd.innerHTML=weekdays[date.getDay()]+",";
    mm.innerHTML=months[date.getMonth()];


}