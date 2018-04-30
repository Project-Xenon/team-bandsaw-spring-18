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
	var name = document.getElementById("username").value;
	var title = document.getElementById("posttitle").value;
  var body = document.getElementById("body").value;
	alert("Username: " + name + "\nPost Title: " + title + "\nBlog Body: " + body);
}
