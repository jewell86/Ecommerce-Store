document.querySelector('.email-form').addEventListener('submit', ev => {
  ev.preventDefault()
  success.innerText = 'Email successfully submitted!'
  emailInput.value = ''
})

const toggleAddCart = require("./product-to-cart.js")
const data = require('./data')
const templates = require('./templates')

toggleAddCart();

const emailInput = document.querySelector('.email-input')
const success = document.querySelector('.success')



// products.html populate products on page
const populate = require('./populate-products.js')
populate.renderFilteredProducts(data)
toggleAddCart();

// products.html (filter function)
const links = Array.from(document.querySelectorAll('.list-products .sort ul li a'))

links.map(el => el.addEventListener('click', function(ev) {
  ev.preventDefault()
  const dataValue = el.dataset.category
  switch (dataValue) {
    case 'all':
      populate.renderFilteredProducts(data)
      toggleAddCart();
      break;
    case 'rick':
      populate.renderRick(data)
      toggleAddCart();
      break;
    case 'morty':
      populate.renderMorty(data)
      toggleAddCart();
      break;
    case 'tech':
      populate.renderTech(data)
      toggleAddCart();
      break;
    case 'sale':
      populate.renderSale(data)
      toggleAddCart();
      break;
    case 'low-price':
      populate.lowPrice(data)
      toggleAddCart();
      break;
    case 'high-price':
      populate.highPrice(data)
      toggleAddCart();
      break;

    default:
      console.log("There is some error here")
  }
}))
