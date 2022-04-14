let handler  = async (m, { conn, text }) => {
	
conn.game = conn.game ? conn.game : {}
try {
if ( conn.game = true ) {
	delete conn.game
	conn.reply( m.chat, `Excluiu com sucesso a sessão de ttt`, m)
	} else if ( conn.game = false ) {
		m.reply(`Sessão ttt🎮 não existe`)
		} else throw 'ngabs'
	} catch (e) {
		m.reply('damaged')
		}
}
	//BY RIZXYU
handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delttt|dellttt)$/i
handler.limit = true

handler.register = true
handler.fail = null

module.exports = handler
