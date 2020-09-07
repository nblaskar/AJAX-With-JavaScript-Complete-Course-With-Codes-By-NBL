document.getElementById("btnajax").addEventListener("click", makerequest);
/*
//1)If Wrong Data file is passed
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data2.txt", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log("Problem Occured");
            }
        }
    }
    xhr.send();
}

//2)steps of execution of ready state
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    console.log("Before Open", xhr.readyState);
    xhr.open("GET", "data.txt", true);
    console.log("After Open", xhr.readyState);
    xhr.onreadystatechange = function () {
        console.log("ReadyState", xhr.readyState);
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log("Problem Occured");
            }
        }
    }
    xhr.send();
}
*/

//3)You Can Work with Every Ready State
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    if (xhr.readyState === 0) {
        console.log("Open Method Not Yet Called 0");
    }
    xhr.open("GET", "data.txt", true);
    if (xhr.readyState === 1) {
        console.log("Open Method Called 1");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
            console.log("Response Header 2");
        }
        if (xhr.readyState === 3) {
            console.log("Loading...... 3");
        }
        if (xhr.readyState === 4) {
            console.log("Done 4");
        }
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log("Problem Occured");
            }
        }
    }
    xhr.send();
}