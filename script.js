function clock() {
    let hrDots = document.getElementById("hrDots");
    let minDots = document.getElementById("minDots");
    let secDots = document.getElementById("secDots")

    let date = new Date()
    let hours = date.getHours() % 12 // to convert to 12 hours format
    let ampm = date.getHours() >= 12 ? "PM" : "AM"
    hours = hours === 0 ? 12 : hours; // handle the midnight(0)

    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let SecondsDot = '';
    for(let i = 1; i <61; i++){
        let rotation  = i * 6; // rotate each line by 6 degrees
    

    if(i === seconds){
        SecondsDot += '<div class = "dot active" style = "transform : rotate('+rotation+'deg)"></div>' ;
    }

    else{
        SecondsDot += '<div class = "dot" style = "transform : rotate('+rotation+'deg)"></div>'
    }
}
let MinutesDot = '';
for(let i = 1; i < 61; i++){
    let rotation = i * 6
  if(i === minutes){
    MinutesDot += '<div class = "dot active" style = "transform : rotate('+rotation+'deg)"></div>';
  }
  else{
    MinutesDot += '<div class = "dot" style = "transform : rotate('+rotation+'deg)"></div>';
  }
}


let HoursDot = '';
for(let i = 1; i < 13; i++){
    let rotation = i * 30; // rotate each line by 30 degrees
    if(i === hours){
        HoursDot += '<div class = "dot active" style = "transform : rotate('+rotation+'deg)"></div>';
    }
    else{
        HoursDot += '<div class = "dot" style = "transform : rotate('+rotation+'deg)"></div>';
    }
}

    secDots.innerHTML =  SecondsDot+ '<b>'+ampm+'</b>'+ '<h2>' + zero(seconds) +  '<br><span>Seconds</span></h2>'
    minDots.innerHTML = MinutesDot + '<h2>' + zero(minutes) + '<br><span>Minutes</span></h2>'
    hrDots.innerHTML = HoursDot + '<h2>' + zero(hours) + '<br><span>Hours</span></h2>'
}

// Adding zero in the single digit

function zero(number){
    if(number < 10){
        return '0'+number
    }
    return number
}
setInterval(clock, 1000)