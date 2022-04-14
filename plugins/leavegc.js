let handler = async (m, { conn, args, command }) => {
    let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
    if (command.endsWith('all') || command.endsWith('semua')) {
        for (let i = 0; i < chat.length; i++) { // For loops
            await m.reply('Tchau👋, O bot vai sair do grupo', chat[i].jid)
            await conn.groupLeave(chat[i].jid)
            await delay(i * 2000) // The delay
        }
        await m.reply('Sucesso!')
    } else if (args[0] || args.length > 0) {
        let ada = chat.find(bot => bot.jid == args[0]) // Is the bot there
        if (!ada) throw 'O bot não está nesse grupo!'
        await m.reply('Tchau👋, O bot vai sair do grupo', args[0])
        await conn.groupLeave(args[0])
        await m.reply('Success!')
    } else {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply('Tchau👋, O bot vai sair do grupo', m.chat) // WKWKW all the messages are the same. not creative :v
        await conn.groupLeave(m.chat)
    }
}
    
handler.help = ['gc', 'gcall', 'group'].map(v => 'leave' + v)
handler.tags = ['group']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i

handler.rowner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time)) 
