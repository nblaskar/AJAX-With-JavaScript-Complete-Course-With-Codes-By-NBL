document.getElementById("btnajax").addEventListener("click", makerequest);
var myDiv = document.getElementById("mydiv");

function makerequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      myDiv.innerText = "Data Inserted";
    } else {
      console.log("Problem Occured");
    }
  };

  myData = '{"name":"Sonam"}';
  xhr.send(myData);
}
