import React from 'react'
import Item from './Item'
import './Transection.css'
import DataContext from '../data/DataContext'
import { useContext } from 'react'

const Transection = (props) => {
    const {items} = props
    const name = useContext(DataContext)
    return (
        <div className='item'>
            
            {items.map((element)=>{
                return <Item key={element.id} title={element.title} amount={element.amount}/>/* <Item {...element}/> ใช้spread operator ในกรณีที่ ชื่อคุณสมบัติคล้ายกัน*/
            })}{/* ลูปข้อมูลโดยใช้ map */}
            
            {/* <DataContext.Consumer>
                {value=><p>{value}</p>}
            </DataContext.Consumer>
            {name} */}

            
        </div>
    )
}

export default Transection