const inputValue = document.getElementById("user-input");

// Handle number clicks
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

// Handle operations
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = inputValue.innerText.slice(-1);

    if (e.target.innerHTML === "=") {
      // Perform calculation
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch (error) {
        inputValue.innerText = "NaN"; // Display error for invalid input
      }
    } else if (e.target.innerHTML === "AC") {
      // Clear input
      inputValue.innerText = "0";
    } else if (e.target.innerHTML === "DEL") {
      // Delete last character
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    } else {
      // Prevent multiple operators in a row
      if (isNaN(lastValue) && isNaN(e.target.innerHTML)) {
        return; // Don't add another operator if the last character is also an operator
      }
      inputValue.innerText += e.target.innerHTML;
    }
  });
});
