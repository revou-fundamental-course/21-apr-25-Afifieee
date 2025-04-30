document.addEventListener("DOMContentLoaded", function () {
    const konversiBtn = document.getElementById("konversi-btn");
    const resetBtn = document.getElementById("reset-btn");
    const reverseBtn = document.getElementById("reverse-btn");

    const inputField = document.getElementById("konversi-input");
    const resultField = document.getElementById("result-input");
    const explanationField = document.getElementById("calculate-detail");

    function convertTemperature() {
        let inputValue = parseFloat(inputField.value);

        if (isNaN(inputValue)) {
            alert("Harap masukkan angka yang valid!");
            return;
        }

        let fahrenheitValue = (inputValue * 9 / 5) + 32;
        let formattedValue = (fahrenheitValue % 1 === 0) ? Math.round(fahrenheitValue) : fahrenheitValue.toFixed(2);

        resultField.value = formattedValue;
        explanationField.value = `${inputValue} °C × (9/5) + 32 = ${formattedValue} °F`;
    }

    function reverseConversion() {
        let inputValue = parseFloat(inputField.value);

        if (isNaN(inputValue)) {
            alert("Harap masukkan angka yang valid!");
            return;
        }

        let celsiusValue = (inputValue - 32) * 5 / 9;
        let formattedValue = (celsiusValue % 1 === 0) ? Math.round(celsiusValue) : celsiusValue.toFixed(2);

        resultField.value = formattedValue;
        explanationField.value = `(${inputValue} °F - 32) × (5/9) = ${formattedValue} °C`;
    }

    function resetFields() {
        inputField.value = "";
        resultField.value = "";
        explanationField.value = "";
    }

    konversiBtn.addEventListener("click", convertTemperature);
    reverseBtn.addEventListener("click", reverseConversion);
    resetBtn.addEventListener("click", resetFields);
});
