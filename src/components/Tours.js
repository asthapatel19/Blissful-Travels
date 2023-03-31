import React from 'react'
import { Card } from './Card'

export const Tours = ({tours,removeTour}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Blissful Travels</h2>
        </div>

        <div className='cards'>
            {
                tours.map((tour)=>{
                    return <Card {...tour} removeTour={removeTour}/>
                })
            }       
        </div>
    </div>
  )
}
