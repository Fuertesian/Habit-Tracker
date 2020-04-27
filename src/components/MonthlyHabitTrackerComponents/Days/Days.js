import React from 'react'
const Days = (props) => {
  let daysList = []
  for (let i = 1; i <= 31; i++) {
    daysList.push(<th key={i}>{i}</th>)
  }

  return daysList
}

export default Days