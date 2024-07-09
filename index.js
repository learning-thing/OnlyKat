if (document.cookie.length > 1) {
    var x = Number(document.cookie.valueOf("clicks").split("=")[1])-1;
    var clickCount = x;
} else {
    var x = 0;
    var clickCount = 0;
}

let clickPower = 1;
console.log(document.cookie.valueOf("clicks"));
console.log(Number(document.cookie.valueOf("clicks").split("=")[1]));
console.log(x);

document.getElementById("LastKat").innerHTML = "Last Kat level: " + (clickCount);
if (clickCount > 12 && clickCount < 100) {
    document.getElementById("progbar").style.width = (clickCount) + "%";
} else {
    if (clickCount < 12) {
        document.getElementById("progbar").style.width = "12%";
    } else {
        if (clickCount > 100) {
            document.getElementById("progbar").style.width = clickCount + "px";
        }
    }
}


function ClickMeFunc() {
    clickCount+=clickPower;
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
    
    if (clickCount > 12 && clickCount < 100) {
        document.getElementById("progbar").style.width = (clickCount) + "%";
    } else {
        if (clickCount > 100) {
            document.getElementById("progbar").style.height = (clickCount-100) + "px";
        }
    }
    if (clickCount >= 100) {
        winner();
    }

    //Click Power
    
    if (document.getElementById("boostCode").value == "car") {
        clickPower = 10;
    }
    if (document.getElementById("boostCode").value == "Tinolm") {
        clickPower = 5;
    }
    if (document.getElementById("boostCode").value == "040david") {
        clickPower = 3;
    }

}

window.onbeforeunload = closingCode;
function closingCode(){
document.cookie = "clicks="+(clickCount+1)+";";
   return null;
}

function winner() {
    alert("You're a Winner!");
    console.log("Winner!");
    pop_links();
}


function pop_links() {//pop up links for the other sites
    const linktext = document.createTextNode("Nyra")
    const linka = document.createElement("a");
    linka.appendChild(linktext);
    linka.id = "Sarabtn";
    linka.href = "Sara.html";
    document.getElementById("root").appendChild(linka);
}


function ResetClicks() {
    clickCount = 0;
    x=0;
    document.cookie = "clicks="+clickCount+";";
    document.getElementById("clickme").innerHTML = "Click Me";
    document.getElementById("progbar").style.width = "12%";
    document.getElementById("progbar").innerHTML = "Progress: 0%";
    document.getElementById("title").innerHTML = "Kat Level: 1";
    document.getElementById("title").style.marginLeft = "0px";
    document.getElementById("clickme").style.marginLeft = "0px";
    document.getElementById("LastKat").innerHTML = "Last Kat level: 0";
    document.getElementById("progbar").style.height = 22 + "px";
}

//#initmethod();