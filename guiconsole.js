var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.write(response.text);
  }
};
xhttp.open("GET", "https://raw.githubusercontent.com/Buggem/guiconsole.js/main/loader.html", true);
xhttp.send();
