function createMarkup(arr) {
   return arr.reduce(
    (markup, { img, price, name, quantity }) =>
      markup +
      `
<li class="cart-item">
  <img src="${img}" alt="${name}" class="product-img"/>
  <h2>${name}</h2>
  <p>Quantity:${quantity}</p>
  <p>Price per one:${price}</p>
  <p>Total price:${price*quantity} грн</p>  
</li>   
  `,
    ""
  );
};
export {createMarkup};