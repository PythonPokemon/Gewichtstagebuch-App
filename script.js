function addWeight() {
  var date = document.getElementById("date").value;
  var weight = document.getElementById("weight").value;
  if (date && weight) {
    var weightList = document.getElementById("weightList");
    var newWeight = document.createElement("p");
    var textNode = document.createTextNode(date + ": " + weight + " kg");
    newWeight.appendChild(textNode);
    weightList.appendChild(newWeight);
    document.getElementById("date").value = "";
    document.getElementById("weight").value = "";
  } else {
    alert("Bitte füllen Sie alle Felder aus.");
  }
}
