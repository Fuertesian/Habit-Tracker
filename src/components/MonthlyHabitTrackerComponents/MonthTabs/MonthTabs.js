import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import HabitTable from "../../../containers/HabitTable";

const MonthTabs = () => {
  const createMonthTab = (month) => {
    return <Tab eventKey={month} title={month}>
      <HabitTable />
    </Tab>;
  };

  return (
    <>
      <Tabs defaultActiveKey="month" id="uncontrolled-tab-example">
        {createMonthTab("January")}
        {createMonthTab("February")}
        {createMonthTab("March")}
      </Tabs>
    </>
  );
};
export default MonthTabs;
