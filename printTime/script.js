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
