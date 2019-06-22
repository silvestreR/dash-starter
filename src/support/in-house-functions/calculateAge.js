import { date } from 'quasar'

export const calculateAge = (value = 0) => {
  if (!value) return value
  const today = new Date()
  if (value.toString().length > 10) {
    const formatedValue = date.formatDate(value, 'DD/MM/YYYY')
    const arrayBirthday = formatedValue.split('/')
    const dayBirthday = arrayBirthday[0]
    const monthBirthday = arrayBirthday[1]
    const yearBirthday = arrayBirthday[2]
    const buildedDate = new Date(yearBirthday, monthBirthday, dayBirthday)
    const formatedToday = date.formatDate(today, 'YYYY/MM/DD')
    const formatedBirthday = date.formatDate(buildedDate, 'YYYY/MM/DD')
    const diferenceDay = date.getDateDiff(formatedToday, formatedBirthday, 'days')
    const age = diferenceDay / 365
    const formatedAge = Math.floor(age)
    return formatedAge > 0 ? `${formatedAge} Anos` : '0 Anos'
  }
  const valueString = value.toString()
  const arrayBirthday = valueString.split('/')
  const dayBirthday = arrayBirthday[0]
  const monthBirthday = arrayBirthday[1] - 1
  const yearBirthday = arrayBirthday[2]
  const buildedDate = new Date(yearBirthday, monthBirthday, dayBirthday)
  const formatedToday = date.formatDate(today, 'YYYY/MM/DD')
  const formatedBirthday = date.formatDate(buildedDate, 'YYYY/MM/DD')
  const diferenceDay = date.getDateDiff(formatedToday, formatedBirthday, 'days')
  const age = diferenceDay / 365
  const formatedAge = Math.floor(age)
  return formatedAge > 0 ? `${formatedAge} Anos` : '0 Anos'
}
