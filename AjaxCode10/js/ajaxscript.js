
document.getElementById("btnajax").addEventListener("click", makerequest);

let id = document.getElementById("id");
let title = document.getElementById("title");
let body = document.getElementById("body");

function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.responseType = "json";
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.response.id);
            console.log(xhr.response.userId);
            console.log(xhr.response.title);
            console.log(xhr.response.body);
            id.innerHTML = xhr.response.id;
            title.innerHTML = xhr.response.title;
            body.innerHTML = xhr.response.body;

        } else {
            console.log("Problem Occured");
        }
    };

    xhr.send();
};
