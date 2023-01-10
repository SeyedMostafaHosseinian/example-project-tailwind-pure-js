const documentElement = document.documentElement;

const lightModeBtn = document.getElementById("light-mode");
const darkModeBtn = document.getElementById("dark-mode");

lightModeBtn.addEventListener('click',() => {
    documentElement.classList.contains('dark') && documentElement.classList.remove('dark')
    localStorage.setItem('theme','ligth')
})

darkModeBtn.addEventListener('click',() => {
    !documentElement.classList.contains('dark') && documentElement.classList.add('dark')
    localStorage.setItem('theme','dark')

})

window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('theme')) {
        const themeMode = localStorage.getItem('theme')
        console.log(themeMode)
        themeMode === 'dark' &&
        documentElement.classList.add('dark')
    }
})