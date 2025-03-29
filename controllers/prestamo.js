const { ipcRenderer } = require("electron");

document.querySelector("btnVolver").addEventListener("click", () => {
    ipcRenderer.send("open-main");
});
