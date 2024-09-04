document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Show the dropdown menu when hovering over the Services item
    dropdown.addEventListener('mouseover', () => {
        dropdownMenu.style.display = 'block';
    });

    // Hide the dropdown menu when the mouse leaves the Services item
    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });

    // Close the dropdown menu if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});