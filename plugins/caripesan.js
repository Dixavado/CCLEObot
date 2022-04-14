let handler = async (m, { conn, text }) => {
    if (!text) throw 'Digite a mensagem que você está procurando!'
    let split = text.split`|`
    let result = await conn.searchMessages(split[0], m.chat, split[1], 1)
    if (result.messages.length > 0) {
        let total = result.messages.length
        let sp = total < Number(split[1]) ? `Apenas encontrado ${total} mensagens` : `Encontrado ${total} mensagens`
        m.reply(sp)

        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
            let _message = await conn.loadMessage(_remoteJid, _ids)
            conn.reply(m.chat, 'Aqui está a mensagem', _message)
        })
    }
}

handler.help = ['procurar <message>|<amount>']
handler.tags = ['tools']

handler.command = /^procurar/i

module.exports = handler
