function updateProductNumber(product, price, isIcreasing) {
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if (isIcreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update product number
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;
  // calculate total
  calculateTotal();
}

// function updateCaseNumber(product, price, isIcreasing) {
//   const caseInput = document.getElementById(product + '-number');
//   let caseNumber = caseInput.value;
//   if (isIcreasing == true) {
//     caseNumber = parseInt(caseNumber) + 1;
//   } else if (caseNumber > 0) {
//     caseNumber = parseInt(caseNumber) - 1;
//   }
//   caseInput.value = caseNumber;
//   // update case number
//   const caseTotal = document.getElementById(product + '-total');
//   caseTotal.innerText = caseNumber * price;
// }

function getInputValue(product) {
  const productInputAmount = document.getElementById(product + '-number');
  const productNumberAmount = parseInt(productInputAmount.value);
  return productNumberAmount;
}

function calculateTotal() {
  const phoneTotalAmount = getInputValue('phone') * 1219;
  const caseTotalAmount = getInputValue('case') * 59;
  const subTotal = phoneTotalAmount + caseTotalAmount;
  const tax = subTotal * 0.15;
  const total = subTotal + tax;
  // update product subtotal
  const productSubTotal = document.getElementById('sub-total');
  productSubTotal.innerText = subTotal.toFixed(3);
  const taxValue = document.getElementById('tax-amount');
  taxValue.innerText = tax.toFixed(3);
  const totalPrice = document.getElementById('total-price');
  totalPrice.innerText = total.toFixed(3);
}

document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
  updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
  updateProductNumber('case', 59, false);
});
