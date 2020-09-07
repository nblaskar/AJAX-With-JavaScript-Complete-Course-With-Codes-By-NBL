
document.getElementById("btnajax").addEventListener("click", makerequest);
let nm1 = document.getElementById("name-id1");
let nm2 = document.getElementById("name-id2");
let rl1 = document.getElementById("roll-id1");
let rl2 = document.getElementById("roll-id2");

function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.xml", true);
    xhr.responseType = "document";
    xhr.onload = function () {
        if (xhr.status === 200) {
            //way of getting Name of First Student
            console.log(xhr.response);
            console.log(xhr.response.getElementsByTagName("student")[0]);
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0]);
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0]);
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);
            nm1.innerHTML = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue
            //way of getting Roll of First Student

            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0]);
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0]);
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue);
            rl1.innerHTML = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue
            //way of getting Name of Second Student

            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("name")[0]);
            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("name")[0].childNodes[0]);
            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue);
            nm2.innerHTML = xhr.response.getElementsByTagName("student")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue
            //way of getting Roll of Second Student

            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("roll")[0]);
            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("roll")[0].childNodes[0]);
            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("roll")[0].childNodes[0].nodeValue);
            rl2.innerHTML = xhr.response.getElementsByTagName("student")[1].getElementsByTagName("roll")[0].childNodes[0].nodeValue

        } else {
            console.log("Problem Occured");
        }
    };

    xhr.send();
};
