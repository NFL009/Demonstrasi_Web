const celcius = document.getElementById("celcius");
const reamur = document.getElementById("reamur");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

let isUpdating = false;

function round(value) {
  return Math.round(value * 100) / 100;
}

function updateFromCelcius(c) {
  reamur.value = round((4 / 5) * c);
  fahrenheit.value = round((9 / 5) * c + 32);
  kelvin.value = round(c + 273);
}

function updateFromReamur(r) {
  const c = (5 / 4) * r;
  celcius.value = round(c);
  updateFromCelcius(c);
}

function updateFromFahrenheit(f) {
  const c = (5 / 9) * (f - 32);
  celcius.value = round(c);
  updateFromCelcius(c);
}

function updateFromKelvin(k) {
  const c = k - 273;
  celcius.value = round(c);
  updateFromCelcius(c);
}

celcius.addEventListener("input", () => {
  if (isUpdating) return;
  const c = parseFloat(celcius.value);
  if (!isNaN(c)) {
    isUpdating = true;
    updateFromCelcius(c);
    isUpdating = false;
  } else {
    clearFields();
  }
});

reamur.addEventListener("input", () => {
  if (isUpdating) return;
  const r = parseFloat(reamur.value);
  if (!isNaN(r)) {
    isUpdating = true;
    updateFromReamur(r);
    isUpdating = false;
  } else {
    clearFields();
  }
});

fahrenheit.addEventListener("input", () => {
  if (isUpdating) return;
  const f = parseFloat(fahrenheit.value);
  if (!isNaN(f)) {
    isUpdating = true;
    updateFromFahrenheit(f);
    isUpdating = false;
  } else {
    clearFields();
  }
});

kelvin.addEventListener("input", () => {
  if (isUpdating) return;
  const k = parseFloat(kelvin.value);
  if (!isNaN(k)) {
    isUpdating = true;
    updateFromKelvin(k);
    isUpdating = false;
  } else {
    clearFields();
  }
});

function clearFields() {
  reamur.value = "";
  fahrenheit.value = "";
  kelvin.value = "";
}
