let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
⭐Nome: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n\n🥀Sobre: ' + about : ''}

🧩Numero: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

⛓️Link: https://wa.me/${who.split`@`[0]}${registered ? '\n\n🎈Idade: ' + age : ''}

☕XP: ${exp} (${math <= 0 ? `Pronto para *${usedPrefix}levelup*` : `${math} XP restante para levelup`})

🎟️Level: ${level}

🎗️Cargo: *${role}*

🪵Limit: ${limit}

🔏Registado: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}

🏮Premium: ${prem ? 'Yes' : 'No'}${lastclaim > 0 ? '\n\n🍁Last Claim: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^perfil$/i
module.exports = handler

