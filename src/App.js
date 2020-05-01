import React from 'react'
import './App.css'
import MonthlyHabitTracker from './containers/MonthlyHabitTracker'
import ClickIndex from './components/MonthlyHabitTrackerComponents/TableRows/ClickIndex'

function App() {
  return (
    <div>
      <ClickIndex />
      <MonthlyHabitTracker />
    </div>
  )
}

export default App
