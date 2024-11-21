// script.js

function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => (content.style.display = 'none'));

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';
}
