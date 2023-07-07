import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
@${m.sender.split("@")[0]}*
${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n*@${global.conn.user.jid.split`@`[0]}*`}
* ${vs} *
*▸▸ ${lenguajeGB.smsMenuTotal1()} ◂◂*

*▸▸ ${lenguajeGB.smsMenuTotal3()} ◂◂*
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *texto*' : 'googlef *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *texto*' : 'simsimi *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *texto*' : 'chatgpt *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yts *texto*' : 'yts *text*'}
*
 *▸▸ ${lenguajeGB.smsMenuTotal4()} ◂◂*
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen *texto*' : 'gimage *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook *enlace*' : 'facebookdl *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire *enlace*' : 'mediafiredl *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *nombre o enlace*' : 'play *name*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *enlace*' : 'yta *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *enlace*' : 'ytv *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmax *enlace*' : 'ytmax *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *enlace*' : 'ytadoc *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *enlace*' : 'ytvdoc *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmaxdoc *enlace*' : 'ytmaxdoc *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tiktok *enlace*' : 'tkdl *link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'openiamage *texto*' : 'dalle *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'midjourney *texto*' : 'openjourney *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotify *texto o enlace*' : 'spotify *text or link*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotifysearch *texto*' : 'spotifysearch *text*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instagram *enlace*' : 'instagram *link*'}

  *▸▸ ${lenguajeGB.smsMenuTotal5()} ◂◂*
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *sticker*' : 'toimg *sticker*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url *imagen*' : 'tourl *image*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 *sticker*' : 'tovideo *sticker*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif *video*' : 'togif *video*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 *video o audio*' : 'tovn *video or audio*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts *texto*' : 'totts *text*'}

*▸▸ ${lenguajeGB.smsMenuTotal11()} ◂◂*

 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar *nombre.edad*' : 'verify *name.age*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'anulareg *id de registro*' : 'unreg *id registration*'}
 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'idregistro' : 'idregister'}

`.trim()
    
/*const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']*/

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
