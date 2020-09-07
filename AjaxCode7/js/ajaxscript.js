/*
document.getElementById("btnajax").addEventListener("click", makerequest);
let nm = document.getElementById("name-id");
let rl = document.getElementById("roll-id");
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.responseType = "json";
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.response.name);
            console.log(xhr.response.roll);
            nm.innerHTML = xhr.response.name;
            rl.innerHTML = xhr.response.roll;
        } else {
            console.log("Problem Occured");
        }
    };

    xhr.send();
};
*/
//parse the json data using JSON.parse method
document.getElementById("btnajax").addEventListener("click", makerequest);
let nm = document.getElementById("name-id");
let rl = document.getElementById("roll-id");
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let obj = JSON.parse(xhr.response);
            console.log(obj);
            console.log(obj.name);
            console.log(obj.roll);
            nm.innerHTML = obj.name;
            rl.innerHTML = obj.roll;
        } else {
            console.log("Problem Occured");
        }
    };

    xhr.send();
};
