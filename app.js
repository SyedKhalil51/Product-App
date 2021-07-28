let products = [{
  productName: 'Headphones',
  image: "Headphone-1.jpg",
  isLiked: false,
  tag: "Head Phones"
},

{
  productName: 'Headphones',
  image: "laptop-2.jpg",
  isLiked: false,
  tag: "Head Phones"
},

{
  productName: "Laptops",
  image: "lenovo-1.jpg",
  isLiked: true,
  tag: "Laptops"
},

{
  productName: "Laptops",
  image: "laptop-3.jpg",
  isLiked: true,
  tag: "Laptops"
},
{
  productName: "Laptops",
  image: "laptop-4.jpg",
  isLiked: true,
  tag: "Laptops"
},
{
  productName: "Digital Watch",
  image: "sm-1.jpg",
  isLiked: false,
  tag: "Digital Watches"
},
{
  productName: "Digital Watch",
  image: "sm-2.jpg",
  isLiked: true,
  tag: "Digital Watches"
},
{
  productName: "Digital Watch",
  image: "sm-3.jpg",
  isLiked: true,
  tag: "Digital Watches"
}

];



function ProductTemplate(myProducts) {
return `
<div class="cards">
<i class="fa fa-heart" aria-hidden="true"></i>
<div class="img">
<img src="${myProducts.image}">
</div>
<h4 >${myProducts.productName} </h4>

<a href="">Add to Cart</a>
</div>
`;
}


document.getElementById("filteredItems").innerHTML += `
${products.map(ProductTemplate).join('')}

`;

function getProduct(userSelected) {
let selectedItemsArray = products.filter(myProduct);

function myProduct(myProducts) {
  if (myProducts.tag == userSelected) {
      // console.log(myProducts)
      return document.getElementById("filteredItems").innerHTML = `
  ${products.map(ProductTemplate).join('')}
  `;

  }
}
document.getElementById("filteredItems").innerHTML = `
${selectedItemsArray.map(ProductTemplate).join('')}  
`
}