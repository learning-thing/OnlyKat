const vidC = document.getElementById("SaravidC");
const Gallv = document.getElementById("GalleryV");
const video = document.createElement("iframe");


function spawnplayer() {
    
    Gallv.style.width = "50%";
    Gallv.style.marginRight = "50%"
    
    vidC.style.width = "70%";
    vidC.style.height = "450px";
    vidC.style.borderRadius = "10px";

    video.src = "https://www.youtube.com/embed/vdcddjV0l5o";
    video.allow = "accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.frameborder=0;
    video.allowFullscreen = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.title = "Fairy Tail: Funny Moments";

    document.getElementById("PrettyPlayerSpawner").remove();
    document.getElementById("SaravidC").appendChild(video);
    document.getElementById("topbar").style.backdropFilter = "blur(3px)";
}

function randomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


$(document).scroll(function() {
    console.log($(document).scrollTop());
})

function confetti() {
    let count = 500;
    const sxpos = [];
    var oldC = document.getElementsByClassName("confetti");
    if (oldC.length > 0) {
        for (let i = 0; i < oldC.length; i++) {
            console.log(oldC[0]);
            oldC[0].remove();
        }
    }


    for (let i = 0; i < count; i++) {
        sxpos.push(Math.random() * window.innerWidth);
    }
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.round(sxpos[i]) + "px";
        confetti.style.animationDelay = Math.random()*10 + "s";
        confetti.style.backgroundColor = randomRGB();

        document.getElementById("root").appendChild(confetti);
    }
    console.log(sxpos);
}

