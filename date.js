let date = new Date();
let WeekDay = document.querySelector(".weekday");
let Day = document.querySelector(".day");
let Month = document.querySelector(".month");
let Year = document.querySelector(".year");
let Hours = document.querySelector(".hours")
let Minutes = document.querySelector(".minutes")
let Secondes = document.querySelector(".secondes")
let Millisecondes = document.querySelector(".millisecondes")
let Chrono = document.querySelector(".timeChrono")
let timeCountDown = document.querySelector(".timeCountDown")
let ChronoPlay = document.getElementById("ChronoPlay")
let CountDownPlay = document.getElementById("CountDownPlay")
let ChronoStop = document.getElementById("ChronoStop")
let CountDownStop = document.getElementById("CountDownStop")
let rangeHours = document.getElementById("heure")
let rangeMinutes = document.getElementById("minute")
let rangeSecondes = document.getElementById("seconde")
let timing = setInterval(mytimer,1);

CountDownPlay.addEventListener("click", CountDown);
ChronoPlay.addEventListener("click", Chronometer);

function mytimer() {
    
    let date = new Date();
    let weekDay = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let millisecondes = date.getMilliseconds();
    switch (weekDay) {
        case 1: 
            weekDay = "Lundi"
            break;
        case 2: 
            weekDay = "Mardi"
            break;
        case 3: 
            weekDay = "Mercredi"
            break;
        case 4: 
            weekDay = "Jeudi"
            break;
        case 5: 
            weekDay = "Vendredi"
            break;
        case 6: 
            weekDay = "Samedi"
            break;
        case 0: 
            weekDay = "Dimanche"
            break;
        default:
            break;
    }
    
    switch (month) {
        case 0:
            month = "Janvier"
            break;
        case 0:
             month = "Fevrier"
            break;
        case 0:
             month = "Mars"
            break;
        case 0:
            month = "Avril"
            break;
        case 0:
           month = "Mai"
           break;
        case 5:
            month = "Juin"   
            break;     
        case 0:
            month = "Juillet"
            break;
        case 0:
             month = "Aout"
                break;
        case 0:
             month = "Septembre"
             break;
        case 0:
            month = "Octobre"
            break;
        case 0:
           month = "Novembre"
           break;
        case 5:
            month = "Decembre"   
            break;              
                                        
        default:
            break;
    }
    
    
   
      
      WeekDay.textContent =  weekDay;
      Month.textContent = month;
      Day.textContent = day;
      Year.textContent = year;
      Hours.textContent = hours;
      Minutes.textContent = minutes;
      Secondes.textContent = secondes;
      Millisecondes.textContent = millisecondes; 
      
}

function Chronometer() {
    let min = 0
    let sec = 0
    let mil = 0
   
    let TopChrono = setInterval(() => {
        mil++ ;
        
        if(mil === 100) {
            mil = 0;
            sec++;
           
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }

        Chrono.textContent = min + ":" + sec + ":" + mil;   
    }, 10);

    ChronoStop.addEventListener('click',function() {
        clearInterval(TopChrono);
    })
}
    
function CountDown() {
    
    
    let hou = rangeHours.value
    let min = rangeMinutes.value
    let sec = rangeSecondes.value 

    rangeMinutes.addEventListener("change", function() {
        min = rangeMinutes.value;
    })
    rangeSecondes.addEventListener("change", function() {
        sec = rangeSecondes.value;
    })
    rangeHours.addEventListener("change", function() {
        hou = rangeHours.value;
    })
     
    let TopCountDown = setInterval(() => {
        if (sec > 0) {
            sec--; 
        }
        
    
            if (sec <= 0 && min > 0) {
               sec = 59;
               min--;
            }
            if (min <= 0 && hou > 0) {
               sec = 59;
               min = 59;
               hou--;
            }
      
            timeCountDown.textContent = hou + ":" + min + ":" + sec  ; 
         if (hou <= 0 && min <= 0 && sec <=0) {
            clearInterval(TopCountDown)
    }
    
    }, 1000)
   
     CountDownStop.addEventListener('click', function () {
         clearInterval(TopCountDown)
     })
}
