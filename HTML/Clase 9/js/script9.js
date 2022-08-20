let main = document.getElementById("main");
let listsection = document.getElementsByTagName("section");
let p0 = document.getElementById("p0");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");


function normal() {
    main.style.display = "unset";
}

function column() {

    main.style.display = "flex";
    main.style.justifyContent = "space-evenly";
    main.style.flexDirection = "column";

}
function row() {

    main.style.display = "flex";
    main.style.justifyContent = "space-evenly";
    main.style.flexDirection = "row";

}

function visibility0() {

    if (p0.style.visibilty == "hidden") {
        p0.style.visibilty = "visible";
        listsection[0].children[0].textContent = "ocultar";
    } else {
        p0.style.visibility = "hidden";
        listsection[0].children[0].textContent = "mostrar";
    }
}
function visibility1() {

    if (p1.style.visibilty == "hidden") {
        p1.style.visibilty = "visible";
        listsection[1].children[0].textContent = "ocultar";
    } else {
        p1.style.visibility = "hidden";
        listsection[1].children[0].textContent = "mostrar";
    }
}
function visibility2() {

    if (p2.style.visibilty == "hidden") {
        p2.style.visibilty = "visible";
        listsection[2].children[0].textContent = "ocultar";
    } else {
        p2.style.visibility = "hidden";
        listsection[2].children[0].textContent = "mostrar";
    }
}