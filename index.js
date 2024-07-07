var x = 1;
var clickCount = 0;

function ClickMeFunc() {
    clickCount++;
    if (clickCount == 1) {
        document.getElementById("clickme").innerHTML = "Clicked once";;
    } else {
        if (clickCount == 2) {
            document.getElementById("clickme").innerHTML = "Clicked twice";
        }
    }
    if (clickCount > 2) {
        document.getElementById("clickme").innerHTML = "Clicked " + clickCount+ " times";
    }

    if (x < 9) {
        x+=1;
    } else {
        x = 0;
    }
    console.log("X is zero");
    document.getElementById("title").innerHTML = "Kat Level: "+(clickCount+1);
    document.getElementById("title").style.marginLeft = ((x+1)*20) + "px";

    document.getElementById("clickme").style.marginLeft = ((x+1)*20) + "px";
    document.getElementById("progbar").innerHTML = "Progress: " + (clickCount) + "%";
    document.getElementById("progbar").style.width = (clickCount) + "%";
    if (clickCount == 100) {
        winner();
    }
}


function winner() {
    alert("Winner");
}

//#initmethod();