function handleChange() {
  let formUnit = document.getElementById("from-unit").value;
  let changeUnit = document.getElementById("units");
  if (formUnit === "Celsius") {
    changeUnit.value = "Fahrenheit";
  } else if (formUnit === "Fahrenheit") {
    changeUnit.value = "Celsius";
  }
}
function tempChange() {
  let degree = document.getElementById("degree").value;
  let formUnit = document.getElementById("from-unit").value;
  let changeUnit = document.getElementById("units").value;
  let result = "";

  if (formUnit === "Celsius" && changeUnit === "Fahrenheit") {
    result = parseInt((degree * 9) / 5 + 32).toFixed(2) + "°F";
  } else if (formUnit === "Fahrenheit" && changeUnit === "Celsius") {
    result = parseInt(((degree - 32) * 5) / 9).toFixed(2) + "°C";
  }

  document.getElementById("result").textContent = result;
}
