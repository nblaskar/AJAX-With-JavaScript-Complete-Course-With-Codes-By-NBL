document.getElementById("btnajax").addEventListener("click", makerequest);
let dt = document.getElementById("mydiv");
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            dt.innerHTML = this.responseText;
        } else {
            console.log("Problem Occured");
        }
    };

    xhr.send();
};

