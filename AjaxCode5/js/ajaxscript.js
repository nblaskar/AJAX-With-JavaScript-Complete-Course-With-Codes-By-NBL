document.getElementById("btnajax").addEventListener("click", makerequest);
function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.withCredentials = true;
    xhr.responseType = "text";
    xhr.setRequestHeader = ("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("XHR Object->", xhr);
            console.log("responseText->", xhr.responseText);
            console.log("statusText->", xhr.statusText);
            console.log("response->", xhr.response);
            console.log("responseURL->", xhr.responseURL);
            console.log("withCredentials->", xhr.withCredentials);
            console.log(xhr.getResponseHeader("LAST-Modified"));
            console.log(xhr.getAllResponseHeaders());

        } else {
            console.log("Problem Occured");
        }
    };

    xhr.send();
};

