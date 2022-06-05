import React from 'react'
import DataContext from '../data/DataContext'
import { useContext } from 'react'
import './ReportComponent.css'

const ReportComponent = () => {
    const {income, outcome} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') //ฟังก์ชัน เพิ่ม , ในหน่วยเงิน (1,000)
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>{formatNumber((income-outcome).toFixed(2))}</h1>
            <div className='report-container'>
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className='report plus'>{formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className='report minus'>{formatNumber(outcome.toFixed(2))}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent