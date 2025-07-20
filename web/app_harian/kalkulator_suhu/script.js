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

    function clearFields() {
      reamur.value = "";
      fahrenheit.value = "";
      kelvin.value = "";
    }

    function debounce(fn, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    celcius.addEventListener("input", debounce(() => {
      if (isUpdating) return;
      const c = parseFloat(celcius.value);
      if (!isNaN(c)) {
        isUpdating = true;
        updateFromCelcius(c);
        isUpdating = false;
      } else {
        clearFields();
      }
    }, 400));

    reamur.addEventListener("input", debounce(() => {
      if (isUpdating) return;
      const r = parseFloat(reamur.value);
      if (!isNaN(r)) {
        isUpdating = true;
        updateFromReamur(r);
        isUpdating = false;
      } else {
        clearFields();
      }
    }, 400));

    fahrenheit.addEventListener("input", debounce(() => {
      if (isUpdating) return;
      const f = parseFloat(fahrenheit.value);
      if (!isNaN(f)) {
        isUpdating = true;
        updateFromFahrenheit(f);
        isUpdating = false;
      } else {
        clearFields();
      }
    }, 400));

    kelvin.addEventListener("input", debounce(() => {
      if (isUpdating) return;
      const k = parseFloat(kelvin.value);
      if (!isNaN(k)) {
        isUpdating = true;
        updateFromKelvin(k);
        isUpdating = false;
      } else {
        clearFields();
      }
    }, 400));