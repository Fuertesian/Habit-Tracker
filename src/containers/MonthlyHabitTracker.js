import React from "react"
import Title from "../components/MonthlyHabitTrackerComponents/Title/Title"
import MonthTabs from "../components/MonthlyHabitTrackerComponents/MonthTabs/MonthTabs"
import Days from "../components/MonthlyHabitTrackerComponents/Days/Days"
import HabitNames from "../components/MonthlyHabitTrackerComponents/HabitNames/HabitNames"
import HabitTrackerTable from "../components/MonthlyHabitTrackerComponents/HabitTrackerTable/HabitTrackerTable"
import Container from "react-bootstrap/Container"

const MonthlyHabitTracker = (props) => {
  return (
    <Container>
      <Title />
      <MonthTabs />
      <Days />
      <HabitNames />
      <HabitTrackerTable />
    </Container>
  )
}

export default MonthlyHabitTracker
