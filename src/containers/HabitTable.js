import React from 'react'
import Table from 'react-bootstrap/Table'
import TableHeader from '../components/MonthlyHabitTrackerComponents/TableHeader/TableHeader'
import HabitNames from '../components/MonthlyHabitTrackerComponents/HabitNames/HabitNames'

const HabitTable = (props) => {

  return (
    <div style={{ textAlign: 'center' }}>
      <Table bordered hover size='sm'>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <HabitNames />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default HabitTable
