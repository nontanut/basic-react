import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./App.css";
import { useState, useEffect } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Components/ReportComponet";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const design = {color:"red", textAlign:"center",fontSize:"1.5rem"};

  const initData = [
    {id: 1, title: "เงินเดือน", amount: 30000},
    {id: 2, title: "ค่าข้าว", amount: -2000}
  ]
  const [items, setItems] = useState(initData);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => { 
    setItems((prevItem) => {
      return [newItem, ...prevItem] // เอาข้อมูลใหม่แทรกข้างหน้า
    });
  }
  useEffect(() => {
    const amounts = items.map(items => items.amount);
    const income = amounts.filter(e => e > 0).reduce((total, e) => total += e, 0);
    const expense = (amounts.filter(e => e < 0).reduce((total, e) => total += e, 0)) * -1;

    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);
  return (
    <DataContext.Provider value = {
      {
        income: reportIncome,
        expense: reportExpense
      }
      }>
        <div className="container">
          <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" excat element={<ReportComponent/>} />
              <Route path="/insert" element=
                {<><FormComponent onAddItem = {onAddNewItem}/>
                <Transaction items = {items}/></>} />
            </Routes>
          </div>
        </div>
    </DataContext.Provider>
  );
};

export default App;
