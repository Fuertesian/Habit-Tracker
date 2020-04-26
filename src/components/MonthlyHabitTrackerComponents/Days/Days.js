import React from 'react'
const Days = (props) => {
  var daysList = []
  for (var i = 1; i <= 31; i++) {
    daysList.push(<p key={i}>{i}</p>)
  }

  return daysList
}

export default Days