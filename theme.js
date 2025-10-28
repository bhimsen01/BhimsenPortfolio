// Get the mode toggle button and the icon element
const themeToggle = document.querySelector('.mode-toggle');
const themeIcon = themeToggle.querySelector('img');

// Initialize icon based on saved theme
if (localStorage.getItem('theme') === 'dark') {
    themeIcon.src = 'Icons/lightmode.png'; // Icon when in dark mode
} else {
    themeIcon.src = 'Icons/darkmode.png'; // Icon when in light mode
}

// Add event listener to toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');

    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'Icons/lightmode.png';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'Icons/darkmode.png';
    }
});
