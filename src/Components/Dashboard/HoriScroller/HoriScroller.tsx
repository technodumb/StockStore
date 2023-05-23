import React from 'react'
import './HoriScroller.scss'
import Card from './Card/Card'

export default function HoriScroller() {
  
  const cardValues=[
    {
      name:'Alisha Bakers',
      price:100,
      count:50,
      img:'https://www.shutterstock.com/image-photo/kuala-lumpur-malaysia-august-25-260nw-1165039456.jpg',
    },
    {
      name:'Bijith Wear',
      price:25,
      count:400,
      img:'https://i.pinimg.com/736x/eb/aa/ad/ebaaadfa07a06538eb6ae43e29764b2d.jpg',
    },
    {
      name:'Royal Knight Tea Shop',
      price:40,
      count:100,
      img:'https://qph.cf2.quoracdn.net/main-qimg-b1fa5144f3529e7038b75d03e5505ee1-lq',
    },
    {
      name:'Green Grocers',
      price:80,
      count:50,
      img:'https://i.ytimg.com/vi/EM7OBGw0uAY/maxresdefault.jpg',
    }
  ]
  return (
    <div className='HoriScroller'>
        {cardValues.map((val)=><Card {...val} key={val.name}/>)}
    </div>
  )
}
