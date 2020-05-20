import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import HabitTable from "../../../containers/HabitTable";

const MonthTabs = () => {
  const createMonthTab = (month) => {
    return (
      <Tab eventKey={month} title={month}>
        <HabitTable />
      </Tab>
    );
  };

  let d = new Date();
  let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <>
      <Tabs defaultActiveKey={monthArray[d.getMonth()]} id="month-tabs">
        {createMonthTab("January")}
        {createMonthTab("February")}
        {createMonthTab("March")}
        {createMonthTab("April")}
        {createMonthTab("May")}
      </Tabs>
    </>
  );
};
export default MonthTabs;
