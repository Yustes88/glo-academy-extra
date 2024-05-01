//Lesson09
const date = new Date()
const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]

const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
]

const changeHourEnding = function (hours) {
  let result = ''

  switch (true) {
    case hours === 1:
    case hours === 21:
      result = 'час'
      break
    case hours === 2:
    case hours === 3:
    case hours === 4:
    case hours === 22:
    case hours === 23:
    case hours === 24:
      result = 'часа'
      break
    default:
      result = 'часов'
  }

  return result
}

const changeEnding = function (number, word) {
  number = '' + number
  let result = word

  switch (true) {
    case number.endsWith('11'):
    case number.endsWith('12'):
    case number.endsWith('13'):
    case number.endsWith('14'):
      result
      break
    case number.endsWith('1'):
      result += 'а'
      break
    case number.endsWith('2'):
    case number.endsWith('3'):
    case number.endsWith('4'):
      result += 'ы'
      break
    default:
      result
  }

  return result
}

const addZero = function (number) {
  let strArr = String(number).split('')

  if (strArr.length === 1) {
    strArr.unshift('0')
  }

  return strArr.join('')
}

console.log(addZero(2))

const updateTimeMessage = function () {
  const fullDateElement = document.querySelector('.fullMessage')
  const shortDateElement = document.querySelector('.shortMessage')

  setInterval(() => {
    const date = new Date()
    const currentDayOfTheWeek = date.getDay()
    const currentDate = date.getDate()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const currentHour = date.getHours()
    const currentMinutes = date.getMinutes()
    const currentSeconds = date.getSeconds()

    const hourEnding = changeHourEnding(currentHour)

    const longDateResult = `Сегодня ${
      week[currentDayOfTheWeek - 1]
    }, ${currentDate} ${months[
      currentMonth
    ].toLowerCase()} ${currentYear} года, ${currentHour} ${hourEnding} ${currentMinutes} ${changeEnding(
      currentMinutes,
      'минут',
    )} ${currentSeconds} ${changeEnding(currentSeconds, 'секунд')}`

    const shortDateResult = `${addZero(currentDate)}.${addZero(
      currentMonth,
    )}.${addZero(currentYear)} - ${addZero(currentHour)}:${addZero(
      currentMinutes,
    )}:${addZero(currentSeconds)}`

    fullDateElement.textContent = longDateResult
    shortDateElement.textContent = shortDateResult
  }, 1000)
}

updateTimeMessage()
