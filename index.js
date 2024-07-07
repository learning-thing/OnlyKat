var x = 1;
var clickCount = 0;

function initmethod() {
    clickCount++;
    document.getElementById("clickme").innerHTML = "Click Me " + clickCount;

    if (x < 9) {
        x+=1;
        console.log("X is zero");
        document.getElementById("title").innerHTML = "Kat Level: "+(x+1);
        document.getElementById("title").style.marginLeft = ((x+1)*20) + "px";
    } else {
        x = 0;
    }
}



//#initmethod();