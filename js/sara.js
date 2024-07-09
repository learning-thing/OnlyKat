function spawnplayer() {
    const vidC = document.getElementById("SaravidC");
    vidC.style.width = "70%";
    vidC.style.height = "450px";
    vidC.style.borderRadius = "10px";

    const video = document.createElement("iframe");
    video.src = "https://www.youtube.com/embed/g8e_OX_JYVc";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.frameborder=0;
    video.allowFullscreen = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.title = "Fairy Tail: Funny Moments";


    document.getElementById("PrettyPlayerSpawner").remove();
    document.getElementById("SaravidC").appendChild(video);
}

