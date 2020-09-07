document.getElementById("btnajax").addEventListener("click", makerequest);
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.timeout = 200;
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        } else {
            console.log("Problem Occured");
        }
    };
    xhr.onprogress = function (e) {
        console.log(e.loaded);
        console.log(e.total);
    };
    xhr.onerror = function () {
        console.log("Network Not Available");
    };
    xhr.onloadstart = function () {
        console.log("Tranaction has Started.....");
    };
    xhr.onloadend = function () {
        console.log("Transaction End.");
    };
    xhr.onabort = function () {
        console.log("Abort");
    };
    xhr.ontimeout = function () {
        console.log("Time Out");
    };




    xhr.send();
};

