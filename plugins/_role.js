let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Iniciante'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Membro'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Bronze'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Prata'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Ouro'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Platina'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Lendario'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
