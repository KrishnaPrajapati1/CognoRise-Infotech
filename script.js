window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (isNaN(height) || height === "") {
        result.innerHTML = "Provide a valid Height!";
    } else if (isNaN(weight) || weight === "") {
        result.innerHTML = "Provide a valid Weight!";
    } else {
        // Calculate BMI
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Underweight: <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal: <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Overweight: <span>${bmi}</span>`;
        }
    }
}