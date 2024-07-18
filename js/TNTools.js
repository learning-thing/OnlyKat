function Conv15_6(req) {
    return Math.round( ((17-req)/3)*100 )/100;
}

function Conv6_15(req) {
    return Math.round((17-(req*3))*100 )/100;
}

function NotenOutput_15_6() {
    let req = document.getElementById("getNote").value;
    console.log(req);

    document.getElementById("NotenOut").innerHTML = "Die Note ist: " + Conv15_6(req);
}

function NotenOutput_6_15() {
    let req = document.getElementById("getNote").value;
    console.log(req);

    document.getElementById("NotenOut").innerHTML = "Die Note ist: " + Conv6_15(req);
}

let liststring = "";
let avglist = [];
function average() {
    let sum = 0;
    for (let i = 0; i < avglist.length; i++) {
        sum += avglist[i];
    }
    return sum/avglist.length;
}

function AddUpAVG() {
    let req = Math.round(document.getElementById("NextAVG").value);
    console.log(avglist);
    if (req != NaN) {
        avglist.push(req);
        liststring += req+"\n";
    }
    document.getElementById("avglist").innerHTML = liststring+"\n->"+Conv15_6(average());
}

function ResetAVG() {
    avglist = [];
    liststring = "";
    document.getElementById("avglist").innerHTML = liststring+"\n->"+average();
}

$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        AddUpAVG();
        document.getElementById("NextAVG").value = "";
        return false;
      }
    });
  });

