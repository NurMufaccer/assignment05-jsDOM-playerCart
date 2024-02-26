const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const catagory =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "gap-12");

    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p.innerText = playerName;
    p1.innerText = price;
    p2.innerText = catagory;
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    document.getElementById("cart-container").appendChild(div);
    console.log();

    updatedTotalCost(price);
    updatedGrandTotal();
  });
}

// Total Cost

function updatedTotalCost(value) {
  const totalCost = convertedNumber("total-cost");
  const sum = totalCost + parseInt(value);
  document.getElementById("total-cost").innerText = sum;
}

// Grand Total

function updatedGrandTotal(value) {
  const totalCost = convertedNumber("total-cost");
  if (value) {
    const cuponField = document.getElementById("cupon-input");
    if (cuponField.value === "MZS10") {
      document.getElementById("grand-total").innerText = totalCost * 0.75;
    } else {
      document.getElementById("grand-total").innerText = totalCost;
      alert("Please enter a valid cupon code");
    }
  } else {
    document.getElementById("grand-total").innerText = totalCost;
  }
}

// utility
function convertedNumber(id) {
  const stringValue = document.getElementById(id).innerText;
  const numberValue = parseInt(stringValue);
  return numberValue;
}
