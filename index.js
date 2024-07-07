var x = Number(document.cookie.valueOf("clicks").split("=")[1]);
var clickCount = x;

console.log(document.cookie.valueOf("clicks"));
console.log(Number(document.cookie.valueOf("clicks").split("=")[1]));
console.log(x);

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
    document.getElementById("title").innerHTML = "Kat Level: "+(clickCount+1);
    document.getElementById("title").style.marginLeft = ((x+1)*20) + "px";

    document.getElementById("clickme").style.marginLeft = ((x+1)*20) + "px";
    document.getElementById("progbar").innerHTML = "Progress: " + (clickCount) + "%";
    
    if (clickCount > 12) {
        document.getElementById("progbar").style.width = (12+clickCount) + "%";
    }
    if (clickCount == 100) {
        document.cookie = "clicks=10;";
        winner();
    }
}


function winner() {
    alert("You're a Winner!");
    console.log("Winner!");
}

//#initmethod();