const apiUrl = "https://fakestoreapi.com/products"; 
const productList = document.getElementById("product-list"); 
const searchBox = document.getElementById("search-box"); 
const searchBtn = document.getElementById("search-btn"); 

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        displayProducts(products); 
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts(products) {
  

    productList.innerHTML = products
        .map(
            (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        </div>
    `
        )
    
}
searchBtn.addEventListener("click", async () =>  {
    const searchInput = searchBox.value.toLowerCase();
    try {
      const response = await fetch(apiUrl);
      const products = await response.json();
      const filteredProducts = products.filter((product) =>
                  product.title.toLowerCase().includes(searchInput)
             );
  
             displayProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  })
fetchProducts();
