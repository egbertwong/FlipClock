const { ipcRenderer, remote } = require('electron')

const setWindow = (event, value) => ipcRenderer.send(
    event, value
)

// 关闭窗口的function
function closeWindow() {
    ipcRenderer.send('close')
}

function minWindow() {
    setWindow('minimize')
}

function maxWindow() {
    setWindow('maximize')
}