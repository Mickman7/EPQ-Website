const toggleButon = document.getElementsByClassName('toggle-button')[0]
const navvarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})