import instruments from "../templates/products.json"
import { createMarkup } from "../templates/product.js";

const refs = {
    productsList: document.getElementById("productsList"),
};

const PRODUCTS_LS_KEY = "checkout";

refs.productsList.insertAdjacentHTML("beforeend", createMarkup(instruments));
refs.productsList.addEventListener("click", handleAdd);
function handleAdd(event) {
    // console.log(event);
    if (event.target.id !== "addBtn") {
        return;
    }
    const product = event.target.closest("#product");
    const productId = Number(product.dataset.id);
    const currentProduct = instruments.find(({ id }) => id === productId);
    const products = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) ?? [];
    const checkoutProductId = products.findIndex(({ id }) => id === productId);
    if (checkoutProductId === -1) {
        currentProduct.quantity = 1;
        products.push(currentProduct);
    } else {
        products[checkoutProductId].quantity += 1;
    }
    localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(products));
}