import React from "react" 
import Transection from "./components/Transection"
import './App.css'
import FormComponent from "./components/FormComponent"
import { useState,useEffect,useReducer } from "react"
import DataContext from "./data/DataContext"
import ReportComponent from "./components/ReportComponent"
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'




function App() {

  const initData = [
    /* {id: 1, title: 'เงินเดือน', amount: 20000},
    {id: 2, title: 'ค่ารักษาพยาบาล', amount: -2000},
    {id: 3, title: 'ค่าน้ำมัน', amount: -5000},
    {id: 4, title: 'ค่าเช่าบ้าน', amount: -8000}, */
    
    
  ]

  const [items,setItems] = useState(initData)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportOutcome,setReportOutcome] = useState(0)

  const onAddNewItem = (newItem) =>{
    setItems((initData)=>{
      return [newItem,...initData]
    })
  }
  
  useEffect(()=>{
    
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const outcome = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)*-1
    
    setReportIncome(income)
    setReportOutcome(outcome)

    console.log(reportIncome)
    console.log(reportOutcome) 
  },[items]) //,reportIncome,reportOutcome

  // reducer state
  
  const [showReport,setShowReport] = useState(true)
  const reducer = (state,action)=>{
    switch(action.type){
      case 'SHOW' :
        return true
      case 'HIDE' :
        return false
    } 
  }
  const [result,dispatch] = useReducer(reducer,showReport)
  return (

    <DataContext.Provider value={
        {
          income : reportIncome,
          outcome : reportOutcome
        }
      }>
      <div className="container">
        <h1 className="head">บัญชีรายรับ - รายจ่าย</h1>
        <Router>
          {/* <div>
            <ul className="horizontal-menu">
              <li>
                <Link to='/'>ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to='/insert'>บันทึกข้อมูล</Link>
              </li>
            </ul>
  
            <Routes>
              <Route path='/' element={<ReportComponent/>}></Route>
              <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transection items={items}/> </>}></Route>
            </Routes>
          </div>  */}
        </Router>

        {result && <ReportComponent/>}
        <FormComponent onAddItem={onAddNewItem}/>
        <Transection items={items}/>
      </div>
      <div align='center'>
        <h1>{result}</h1>
        <button onClick={()=>dispatch({type: 'SHOW'})}>แสดง</button>
        <button onClick={()=>dispatch({type: 'HIDE'})}>ซ่อน</button>
      </div>
    </DataContext.Provider> 
    
    
  )
}

export default App
