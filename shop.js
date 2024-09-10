//shop javascript



        function addToCart(name, price, image) {
            let cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Retrieve existing cart from localStorage
        
            // Check if the product already exists in the cart
            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                existingProduct.quantity += 1; // Increase quantity if product exists
            } else {
                cart.push({ name, price, image, quantity: 1 }); // Add new product to the cart
            }
        
            localStorage.setItem('cartItems', JSON.stringify(cart)); // Save cart to localStorage
            // alert(`${name} has been added to your cart.`);
            document.getElementById('popupMessage').textContent = `${name} added to cart!`;
            const popup = document.getElementById('popup');
            popup.style.display = 'block';

            
            // Hide popup after 5 seconds
            setTimeout(() => {
                popup.style.display = 'none';
            }, 5000);
        }
        
        // Move the goToCartPage function outside
        function goToCartPage() {
            window.location.href = 'cart.html'; // Link to cart page
        }




//category script

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const fruits = document.querySelectorAll('.fruit');
const vegetables = document.querySelectorAll('.vegetable');
const breads = document.querySelectorAll('.bread');
const meats = document.querySelectorAll('.meat');
const dairys = document.querySelectorAll('.dairy');
const pastas = document.querySelectorAll('.pasta');
const beverages = document.querySelectorAll('.beverage');

// Display all items initially
all.forEach(item => item.style.display = 'block');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove the 'active' class from all tabs
        tabs.forEach(tab => tab.classList.remove("active"));

        // Add the 'active' class to the clicked tab
        tab.classList.add("active");

        const tabval = tab.getAttribute('data-tabs');

        // Hide all items
        all.forEach(item => {
            item.style.display = 'none';
        });

        // Show items based on the selected tab
        if (tabval == 'fruit') {
            fruits.forEach(item => item.style.display = 'block');
        } else if (tabval == 'vegetable') {
            vegetables.forEach(item => item.style.display = 'block');
        } else if (tabval == 'bread') {
            breads.forEach(item => item.style.display = 'block');
        } else if (tabval == 'meat') {
            meats.forEach(item => item.style.display = 'block');
        } else if (tabval == 'dairy') {
            dairys.forEach(item => item.style.display = 'block');
        } else if (tabval == 'pasta') {
            pastas.forEach(item => item.style.display = 'block');
        } else if (tabval == 'beverage') {
            beverages.forEach(item => item.style.display = 'block');
        } else {
            all.forEach(item => item.style.display = 'block');
        }
    });
});
//search bar script
// document.addEventListener('DOMContentLoaded', function() {
//     const searchForm = document.getElementById('searchForm');
//     const searchInput = document.getElementById('default-search');
//     const productList = document.getElementById('productsList');
//     const products = productList.getElementsByClassName('item_wrap');

//     searchForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const query = searchInput.value.toLowerCase();

//         for (let i = 0; i < products.length; i++) {
//             const productName = products[i].querySelector('h3').textContent.toLowerCase();
//             if (productName.includes(query)) {
//                 products[i].style.display = ''; // Show the product
//             } else {
//                 products[i].style.display = 'none'; // Hide the product
//             }
//         }
//     });
// });

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const query = document.getElementById('default-search').value.trim().toLowerCase();
    const items = document.querySelectorAll('.item_wrap');
    let hasResults = false;

    if (!query) {
        // If search input is empty, show all items and hide "No Results" message
        items.forEach(item => item.style.display = '');
        document.getElementById('noResults').classList.add('hidden');
        return;
    }

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(query)) {
            item.style.display = '';  // Show matching items
            hasResults = true;
        } else {
            item.style.display = 'none';  // Hide non-matching items
        }
    });

    // Toggle "No results" message based on results
    document.getElementById('noResults').classList.toggle('hidden', hasResults);
});

// Optional: You can add debouncing if search input changes rapidly, 
// rather than waiting for form submission
let debounceTimeout;
document.getElementById('default-search').addEventListener('input', function() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        document.getElementById('searchForm').dispatchEvent(new Event('submit'));
    }, 300); // Wait 300ms before triggering search
});








// Function to get query parameter from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Capture the search query from the URL
const searchQuery = getQueryParam('q');

// Check if there is a search query
if (searchQuery) {
    const items = document.querySelectorAll('.item_wrap'); // Assuming .shop-item class is on each product
    let foundItems = 0;

    // Filter items based on search query
    items.forEach(item => {
        const itemName = item.textContent.toLowerCase(); // Assuming the product name is in textContent
        if (itemName.includes(searchQuery.toLowerCase())) {
            item.style.display = 'block';  // Show matched items
            foundItems++;
        } else {
            item.style.display = 'none';  // Hide unmatched items
        }
    });

    // Show 'No Results' message if no items match
    if (foundItems === 0) {
        document.getElementById('noResults').classList.remove('hidden');
    }
}





