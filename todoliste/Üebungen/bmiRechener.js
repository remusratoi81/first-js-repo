window.onload = () => {
  let button = document.querySelector("#btn")

  button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value)

    let result = document.querySelector("#result");

    if (height === "" || isNaN(height))
      result.innerHTML = "Geben Sie eine gültige Größe an!";

    else if (weight === "" || isNaN(weight))
      result.innerHTML = "Geben Sie ein gültiges Gewicht ein"

    else {
      let bmi = (weight / ((height * height) /10000)).toFixed(2);
      if(bmi < 18.6)
        result.innerHTML = `Untergewicht : <span>${bmi}</span>`;
      else if (bmi >= 18.8 && bmi < 24.9)
        result.innerHTML = `Normal : <span>${bmi}</span>`;
      else
        result.innerHTML = `Übergewicht : <span>${bmi}</span>`;
    
    }
}
    
