import React from 'react'
import Table from 'react-bootstrap/Table'
import TableHeader from '../components/MonthlyHabitTrackerComponents/TableHeader/TableHeader'

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
          <tr></tr>
        </tbody>
      </Table>
    </div>
  )
}

export default HabitTable
