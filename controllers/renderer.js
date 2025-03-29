const { ipcRenderer } = require('electron');

document.querySelector(".button-prestamo").addEventListener("click", () => {
    ipcRenderer.send("open-prestamo");
})