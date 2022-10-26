function arrayOpertion() {
  var arrelement = document.getElementById("ArrayElements").value.split(" ");
  var [...arry] = arrelement;
  let sum = arry.reduce((sum, num) => parseInt(sum) + parseInt(num));
  alert(
    "Sum of all elements in the array: " +
      sum +
      "\n" +
      "Average of all elements in the array: " +
      sum / arry.length
  );
}
