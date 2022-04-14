let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw 'Responder à mensagem!'
    if (!text) throw `Use *${usedPrefix}list${which}* para ver a lista`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' registrado na lista de mensagens`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mensagem adicionada com sucesso na lista de mensagens como: '${text}'
    
    Acesse com ${usedPrefix}get${which} ${text}

    ou digite diretamente o texto`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
