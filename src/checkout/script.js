import { createMarkup } from "../templates/checkoutProduct.js";
const refs = {
    totalPrice: document.getElementById("productPrice"),
    checkoutList: document.getElementById("checkoutList"),
    clearBtn: document.getElementById("clearBtn"),
};

const PRODUCTS_LS_KEY = "checkout";

const products = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) ?? [];
// console.log(products);
let totalCost = 0;
if (products.length !== 0) {
    refs.clearBtn.hidden = false;
    totalCost = products.reduce((acc, { quantity, price }) => acc + quantity * price,
    0);
    refs.totalPrice.textContent = totalCost !== 0 ? `Total price: ${totalCost} hrn` : "Your cart is empty";
}

refs.checkoutList.insertAdjacentHTML("beforeend", createMarkup(products));
refs.clearBtn.addEventListener("click", handleClearBtn);
function handleClearBtn() {
    localStorage.removeItem(PRODUCTS_LS_KEY);
    window.location.href = "../00-onlineshop.html";
}