// Sample data for products (replace with your actual data)
const productsData = [
    { name: 'Surgical mask', price: '₹299', imageUrl: 'images/mask_1.jpg' },
    { name: 'Barrier Face Covering', price: '₹328', imageUrl: 'images/mask_2.jpg' },
    { name: 'Cotton face mask', price: '₹150', imageUrl: 'images/mask_3.jpg' },
    { name: 'General N95', price: '₹81', imageUrl: 'images/mask_4.jpg' },
    { name: 'N95', price: '₹199', imageUrl: 'images/mask_5.jpg' },
    { name: 'Nylon face mask', price: '₹279', imageUrl: 'images/mask_6.jpg' },
    { name: 'Silk mask', price: '₹298', imageUrl: 'images/mask_7.jpg' },
    

    // Add more products as needed
];

// Function to dynamically create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.imageUrl;
    image.alt = product.name;
    image.classList.add('product-image');

    const name = document.createElement('div');
    name.textContent = product.name;
    name.classList.add('product-name');

    const price = document.createElement('div');
    price.textContent = `Price: ${product.price}`;
    price.classList.add('product-price');

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products');

    productsData.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

searchBar.addEventListener('keyup', () => {
    const searchTerm = searchBar.value.toLowerCase();

    // Replace this with your actual search logic (e.g., searching an array, database, etc.)
    const results = ['Surgical mask', 'Barrier Face Covering', 'Cotton face mask','General N95','N95','Nylon face mask','Silk mask'].filter(item => item.toLowerCase().includes(searchTerm));

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

