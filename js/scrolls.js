document.getElementById("main-action-button").onclick = function () {
    document.getElementById("catalog").scrollIntoView({behavior: "smooth"});
};

let links = document.querySelectorAll(".header-li > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}
