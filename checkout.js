  // Retrieve total from localStorage
  const total = localStorage.getItem('totalAmount') || '0.00';
  document.getElementById('totalAmount').textContent = `$${total}`;

  // Handle form submission
  document.getElementById('checkoutForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const email = document.getElementById('email').value;

      if (name && address && email) {
          alert(`Thank you, ${name}! Your order has been placed successfully. Total: $${total}`);
          
          // Optionally, clear the cart and total
          localStorage.removeItem('cartItems'); // Clear cart
          localStorage.removeItem('totalAmount'); // Clear total amount
          
          // Redirect to thank you page or back to product page
          window.location.href = 'thankyou.html';
      } else {
          alert('Please fill in all required fields.');
      }
  });