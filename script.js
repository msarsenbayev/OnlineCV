// const toggleCheckbox = document.getElementById('toggle_checkbox');
// const body = document.body;

// let userToggled = false; // Track user's toggle action

// // Retrieve the theme preference from localStorage
// const savedTheme = localStorage.getItem('theme');

// // Set the initial theme based on the saved preference
// if (savedTheme === 'light') {
//     body.classList.add('light-mode');
//     updateToggleElements(true);
// } else {
//     updateToggleElements(false);
// }

// toggleCheckbox.addEventListener('change', () => {
//     body.classList.toggle('light-mode');
//     updateToggleElements(body.classList.contains('light-mode'));

//     // Save the theme preference to localStorage
//     const themeToSave = body.classList.contains('light-mode') ? 'light' : 'dark';
//     localStorage.setItem('theme', themeToSave);
// });


// function updateToggleElements(isDarkMode) {
//     const stars = document.querySelectorAll('.star');
//     const moon = document.getElementById('moon');
    
//     if (isDarkMode) {
//         stars.forEach(star => star.style.color = '#fff');
//         moon.style.backgroundColor = '#333';
//     } else {
//         stars.forEach(star => star.style.color = '#000');
//         moon.style.backgroundColor = '#f0f0f0';
//     }
// }


const toggleCheckbox = document.getElementById('toggle_checkbox');
const body = document.body;

// Retrieve the theme preference from localStorage
const savedTheme = localStorage.getItem('theme');

// Function to set the theme based on the saved preference
function setTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        updateToggleElements(true);
        toggleCheckbox.checked = true; // Update the checkbox state
    } else {
        updateToggleElements(false);
        toggleCheckbox.checked = false; // Update the checkbox state
    }
}

// Set the initial theme based on the saved preference
setTheme(savedTheme);

toggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    updateToggleElements(body.classList.contains('light-mode'));

    // Save the theme preference to localStorage
    const themeToSave = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', themeToSave);
});

function updateToggleElements(isDarkMode) {
    const stars = document.querySelectorAll('.star');
    const moon = document.getElementById('moon');

    if (isDarkMode) {
        stars.forEach(star => star.style.color = '#fff');
        moon.style.backgroundColor = '#333';
    } else {
        stars.forEach(star => star.style.color = '#000');
        moon.style.backgroundColor = '#f0f0f0';
    }
}
