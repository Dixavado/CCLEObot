let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `marque a pessoa!`
    if (global.prems.includes(who.split`@`[0])) throw 'ele é premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} agora é premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addpremium [@user]']
handler.tags = ['owner']
handler.command = /^(add|plus|\+)prem$/i

handler.rowner = true

module.exports = handler
