const toggleCheckbox = document.getElementById('toggle_checkbox');
const body = document.body;

toggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    updateToggleElements();
});

function updateToggleElements() {
    const stars = document.querySelectorAll('.star');
    const moon = document.getElementById('moon');
    
    if (toggleCheckbox.checked) {
        stars.forEach(star => star.style.color = '#fff'); // Change star color to white
        moon.style.backgroundColor = '#333'; // Change moon background color
    } else {
        stars.forEach(star => star.style.color = '#000'); // Reset star color
        moon.style.backgroundColor = '#f0f0f0'; // Reset moon background color
    }
}
