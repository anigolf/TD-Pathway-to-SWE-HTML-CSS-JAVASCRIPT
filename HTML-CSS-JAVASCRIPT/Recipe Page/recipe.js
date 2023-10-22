const updateButton = document.getElementById("update-btn");

function updateServings() {
  const servings = parseInt(document.getElementById("servings").value);
  const quantities = document.querySelectorAll(".quantity");
  
  quantities.forEach((quantityElement) => {
    const originalQuantity = parseInt(quantityElement.innerText);
    const updatedQuantity = (originalQuantity * servings) / 1;
    quantityElement.innerText = updatedQuantity;
  });
}

updateButton.addEventListener("click", () => {
  updateServings();
});