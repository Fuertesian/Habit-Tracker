import React from 'react'
import Days from '../Days/Days'

const TableHeader = (props) => {
    let daysList = <Days />
    return (
      <>
        <th>Habits</th>
        {daysList}
        <th>Success %</th>
      </>
  )
}

export default TableHeader
