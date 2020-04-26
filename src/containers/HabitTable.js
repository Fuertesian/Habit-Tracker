import React from 'react'
import Table from 'react-bootstrap/Table'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const HabitTable = (props) => {
  var daysList = []
  for (let i = 1; i <= 31; i++) {
    daysList.push(
      <th>
        <center>{i}</center>
      </th>
    )
  }

  var tableRow = []
  for (let num = 1; num <= daysList.length + 2; num++) {
    tableRow.push(<td></td>)
  }

  // tableRow[0] = (
  //   <Form.Group>
  //     <Form.Control size='sm' type='text' placeholder='Small text' />
  //   </Form.Group>
  // )

  for (var i = 1; i <= 31; i++) {
    tableRow[i] = <td></td>
  }

  // function addNewRow() {

  // }

  return (
    <>
      <Table bordered hover size='sm'>
        <thead>
          <tr>
            <th>
              <center>Habits</center>
            </th>
            {daysList}
            <th>
              <center>Success %</center>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>{tableRow}</tr>
        </tbody>
      </Table>
    </>
  )
}

export default HabitTable
