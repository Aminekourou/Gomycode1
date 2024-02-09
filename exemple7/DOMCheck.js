document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".item");
  const totalElement = document.getElementById("total");

  let total = 0;

  items.forEach(function(item) {
    const quantityElement = item.querySelector(".quantity");
    const likeButton = item.querySelector(".like");
    const removeButton = item.querySelector(".remove");
    const minusButton = item.querySelector(".minus");
    const plusButton = item.querySelector(".plus");

    let quantity = parseInt(quantityElement.textContent);

    minusButton.addEventListener("click", function() {
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotal();
      }
    });

    plusButton.addEventListener("click", function() {
      quantity++;
      quantityElement.textContent = quantity;
      updateTotal();
    });

    removeButton.addEventListener("click", function() {
      item.remove();
      updateTotal();
    });

    likeButton.addEventListener("click", function() {
      likeButton.classList.toggle("liked");
    });
  });

  function updateTotal() {
    total = 0;
    items.forEach(function(item) {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const price = 10; // Prix par article (à remplacer par votre propre logique)
      total += quantity * price;
    });

    totalElement.textContent = "Total: $" + total;
  }
});
