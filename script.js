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

  return str;
}

function createPost() {
  blogPost();
	newPostAlert();
}

function newPostAlert() {
	var name = document.getElementById("username").value;
	var title = document.getElementById("posttitle").value;
  var body = document.getElementById("body").value;
	alert("Username: " + name + "\nPost Title: " + title + "\nTime of Post: " + printTime() + "\nBlog Body: " + body);
}

function blogPost() {
  var name1 = document.getElementById("username").value;
  var title1 = document.getElementById("posttitle").value;
  var body1 = document.getElementById("body").value;
  var blogEntry = "<b>Username:</b> " + name1 + "<br><b>Post Title:</b> " + title1 + "<br><b>Time of Post: </b>" + printTime() + "<br><b>Blog Body:</b> " + body1 + "<br><br><br>";
  document.getElementById("blog").innerHTML += blogEntry;
}
