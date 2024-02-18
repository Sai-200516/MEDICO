// Sample data for products (replace with your actual data)
const productsData = [
    { name: 'AyurVeda Bliss Herbal Tea', price: '₹200', imageUrl: 'images/1.png' },
    { name: 'AyurFresh Herbal Toothpaste', price: '₹150', imageUrl: 'images/2.png' },
    { name: 'Herbal DantaKanti', price: '₹200', imageUrl: 'images/3.png' },
    { name: 'Nature Harmony Ayurvedic Massage Oil', price: '₹400', imageUrl: 'images/4.png' },
    { name: 'Divine Herb Infused Face Cream', price: '₹599', imageUrl: 'images/5.png' },
    { name: 'Pure Mind Calming Ayurvedic Incense', price: '₹799', imageUrl: 'images/6.jpg' },
    { name: 'Tranquil Sleep Herbal Supplement', price: '₹999', imageUrl: 'images/7.jpg' },
    { name: 'AyurLife Digestive Herbal Tonic', price: '₹699', imageUrl: 'images/8.jpg' },
    { name: 'Revitalizing Ayurvedic Hair Oil', price: '₹859', imageUrl: 'images/9.jpg' },
    { name: 'AyurBalance Joint Support Capsules', price: '₹999', imageUrl: 'images/10.jpg' },
    { name: 'Blissful Breath Herbal Inhaler', price: '₹659', imageUrl: 'images/1.png' },
    { name: 'AyurGlow Skin Detoxifying Mask', price: '₹199', imageUrl: 'images/7.jpg' },
    { name: 'Harmony Herbal Shampoo', price: '₹1111', imageUrl: 'images/2.png' },
    { name: 'Herbal Nourish Ayurvedic Body Lotion', price: '₹899', imageUrl: 'images/8.jpg' },
    { name: 'Divine Herb Infused Face Cream', price: '₹659', imageUrl: 'images/1.png' },

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
    const results = ['AyurVeda Bliss Herbal Tea', 'Item 2', 'Item 3'].filter(item => item.toLowerCase().includes(searchTerm));

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
