const { app, BrowserWindow } = require('electron');
const path = require('path');

// 创建窗口
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 预加载脚本
      nodeIntegration: true, // 启用 Node.js 集成
      contextIsolation: false, // 禁用上下文隔离（仅用于开发阶段）
      webSecurity: false, // 允许跨域请求（仅用于开发阶段）
    },
  });

  // 加载前端页面
  win.loadFile('index.html');
}

// 应用启动时创建窗口
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 关闭所有窗口时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});