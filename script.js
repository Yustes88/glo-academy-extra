//Lesson07
//Lesson07

const displayDaysOfTheWeek = function () {
  const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ]

  const currentDate = new Date()
  const currentDayOfTheWeek = currentDate.getDay()

  const weekElement = document.querySelector('.week')
  const listBlockElement = document.createElement('ul')

  week.map(dayOfTheWeek => {
    const element = document.createElement('li')

    if (week.indexOf(dayOfTheWeek) === currentDayOfTheWeek - 1) {
      element.style.fontWeight = 'bold'
    }

    if (week.indexOf(dayOfTheWeek) === 5 || week.indexOf(dayOfTheWeek) === 6) {
      element.style.fontStyle = 'italic'
    }

    element.innerText = dayOfTheWeek
    listBlockElement.appendChild(element)
  })

  weekElement.appendChild(listBlockElement)
}

displayDaysOfTheWeek()
