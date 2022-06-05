import React from 'react'
import PropTypes from 'prop-types';
import './Item.css'
import DataContext from '../data/DataContext';
import { useContext } from 'react';


const Item = (propsss) => {
    const {title,amount} = propsss
    const status = amount<0 ? 'outcome':'income'
    const symbol = amount<0 ? '':'+'
    const name = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
            <li className={status}>{title}<span>{symbol}{formatNumber(amount.toFixed(2))}</span>
                {/* <DataContext.Consumer>
                    {value=><p>{value}</p>}
                </DataContext.Consumer>
                {name} */}
            </li>
    ) 
}

Item.propTypes ={
    title: PropTypes.string.isRequired, //ปังคับให้ข้อมูลที่เข้ามาต้องเป็น string และห้ามเป็นค่าว่าง
    amount: PropTypes.number.isRequired
}
export default Item