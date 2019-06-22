export const translate = value => {
  switch (value) {
    case 'administrator':
      return 'Administrador'
    case 'doctor':
      return 'Médico(a)'
    case 'receptionist':
      return 'Recepcionista'
    case 'master':
      return 'Master'
    case 'laboratory':
      return 'Laboratório'
    default:
      return ''
  }
}
