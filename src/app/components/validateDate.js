import React from 'react'


const dateRegex = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
// const currentYear = new Date().getFullYear()

const validateDate = (reserveDate) => {
  if (!reserveDate.match(dateRegex)) {
    return false
  }

  const day = parseInt(reserveDate.split('/')[0])
  const month = parseInt(reserveDate.split('/')[1])
  const year = parseInt(reserveDate.split('/')[2])
  const monthDays = new Date(year, month, 0).getDate()
  if (day > monthDays) {
    return false
  }

  // if (year > currentYear) {
  //   return false
  // }

  return true
}

export default validateDate