import React, { FormEvent, useRef, useState } from 'react'
import './Card.scss'
import {Line} from 'react-chartjs-2'
import { Chart as LineJS, registerables } from 'chart.js';
LineJS.register(...registerables);

interface cardProps {
    name:string,
    price:number,
    count:number,
    img:string,
}

export default function Card(props:cardProps) {
     
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        setCount(count-countRef)
        setCountRef(0)

    }

    const handleChange=(e:any)=>{
        const temp=parseInt((e.target as HTMLInputElement).value)
        setCountRef(temp?temp:0)
    }

    const ref=useRef()

    const [count,setCount]=useState(props.count);
    const [countRef,setCountRef]=useState(0);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
    labels,
    datasets: [
        {
        label: 'Share/Price',
        data: labels.map(_=>Math.ceil(Math.random()*40)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Company Evaluation',
        data: labels.map(_=>Math.ceil(Math.random()*40)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };
  
    return (
    <div className='Card'>
        <img src={props.img} alt="MainImage" />
        <h1>{props.name}</h1>
        <h2>{`₹${props.price}/Stock`}</h2>
        <h2>{count+' Stocks remaining'}</h2>
        <Line data={data} ref={ref}/>
        {/* <form onSubmit={handleSubmit}>
            <input type="text" value={countRef} onChange={handleChange} 
            style={(countRef>count)?{color:'red'}:{}}/>
            <input type="submit" value="Submit" disabled={countRef>count}/>
        </form> */}
    </div>
    )
}
