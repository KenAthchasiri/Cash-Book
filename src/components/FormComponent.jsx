import React, { Children, useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) =>{
        setTitle(event.target.value)
    }
    
    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }
    
    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }
    /* const buttonToggle = () =>{
        document.getElementById('')
    } */
    const checkData = title.trim().length>0 && amount !=='' && amount !=='0' 
    
    useEffect(()=>{
        
    },[])


    return (
        <div>
            <form onSubmit={saveItem}>
                <div className='form-control'>
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder='ระบุชื่อรายการของคุณ' onChange={inputTitle} value={title}/>
                </div>
                {/* <div className='form-type'>
                    <button onClick= className='type-in active' checked="checked" type='button' value='income'>รายรับ</button>
                    <button className='type-out active' checked="checked" type='button' value='outcome'>รายจ่าย</button>
                </div> */}
                <div className='form-control'>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder='(+ รายรับ, - รายจ่าย)' onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className='btn' type='submit' disabled={!checkData}>เพิ่มข้อมูล</button>
                </div>
            </form>
            
        </div>
    )
}

export default FormComponent