// Update availability based on data or user interaction
function updateAvailability(cardElement, inStock) {
    const stockElements = cardElement.querySelectorAll('.availability span');
    stockElements[0].style.display = inStock ? 'block' : 'none';
    stockElements[1].style.display = inStock ? 'none' : 'block';
  }
  
  // Example usage: updateAvailability(document.querySelector('.medicine-card'), true);
  
  // Add functionality to "Add to Cart" button based on your requirements
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Add to cart logic here
      alert('Medicine added to cart!');
    });
  });
  const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

searchBar.addEventListener('keyup', () => {
    const searchTerm = searchBar.value.toLowerCase();

    // Replace this with your actual search logic (e.g., searching an array, database, etc.)
    const results = ['Item 1', 'Item 2', 'Item 3'].filter(item => item.toLowerCase().includes(searchTerm));

    searchResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            searchResults.appendChild(listItem);
        });
    } else {
        searchResults.innerHTML = '<li>No results found.</li>';
    }
});

  