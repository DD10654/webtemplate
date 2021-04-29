pagnation = ["index.html", "page2.html", "page3.html"];
current = 1;

function page1() {
    current = 1;
    window.location = pagnation[current - 1];
}

function page2() {
    current = 2;
    window.location = pagnation[current - 1];
}

function page3() {
    current = 3;
    window.location = pagnation[current - 1];
}
