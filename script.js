function printTime() {
  var date = new Date();

  var str = (date.getMonth()+1) +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " | " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  document.getElementById("result").innerHTML = 'Timestamp: ' + str;
}

function createPost() {
	newPostAlert();
}

function newPostAlert() {
	var label = document.getElementById("postLabel").value;
	var desc = document.getElementById("postDescription").value;
	alert("Title: " + label + "\nDescription: " + desc);
}