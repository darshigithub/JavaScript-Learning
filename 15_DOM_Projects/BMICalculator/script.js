const formData = document.querySelector("form");

formData.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#bmi-height").value);

  const weight = parseInt(document.querySelector("#bmi-weight").value);

  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Plz enter valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Plz enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let guide="Under Weight";
    if(bmi >= 18.6 && bmi <= 24.9){
        guide = "Normal Range";
    } else if(bmi > 24.9) {
        guide = "Over Weight";
    }

    result.innerHTML = `<span>${bmi} - ${guide}</span>`
  }
});
