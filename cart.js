
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsDiv = document.getElementById('cartItems');

// Function to update the total price
function updateTotal() {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').innerHTML = `Total: $${total.toFixed(2)}`;
}

// Function to render cart items
function renderCartItems() {
    cartItemsDiv.innerHTML = ''; // Clear existing cart items

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="flex justify-between gap-5 w-72  items-center mb-4">
                <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-cover">
                <span class="flex ml-1 mr-1">${item.name}</span>
                <div class="flex items-center">
                    <button onclick="decreaseQuantity(${index})" class="bg-gray-300 text-black lg:px-2 px-1  rounded">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})" class="bg-gray-300 text-black lg:px-2 px-1 rounded">+</button>
                </div>
                <span class="text-right w-5">$${(item.price * item.quantity).toFixed(2)}</span>
                <button onclick="removeItem(${index})" class="ml-2 text-red-600">X</button>
            </div>
        `;
    });

    updateTotal(); // Update the total price after rendering
}

// Function to increase quantity
function increaseQuantity(index) {
    cart[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cart)); // Update localStorage
    renderCartItems(); // Re-render cart
}

// Function to decrease quantity
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(cart)); // Update localStorage
        renderCartItems(); // Re-render cart
    }
}

// Function to remove item from cart
function removeItem(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cartItems', JSON.stringify(cart)); // Update localStorage
    renderCartItems(); // Re-render cart
}

// Function to go to the checkout page
function goToCheckoutPage() {
    localStorage.setItem('totalAmount', cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)); // Save total to local storage
    window.location.href = 'checkout.html'; // Navigate to checkout page
}

// Render the cart items on page load
renderCartItems();
