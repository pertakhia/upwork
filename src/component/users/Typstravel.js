import React from 'react'
import './typstravel.css'
import  elips from '../../icon/elips.svg'
import adventure from '../../icon/adventure.svg'
import historical from '../../icon/historical.svg'
import urban from '../../icon/urban.svg'
import water from '../../icon/water.svg'
import forest from '../../icon/forest.svg'

const Typstravel = () => {
    return (
        <div className='section-travel container1'>
            <h1 className='text-travel'>Travel Types</h1>
           <section className='travel-box'>
             <div className='water'> 
                  <img src={historical} className='hist' alt='hist'/>
                  <h2>Historical</h2>
                 <img className='elips' src={elips} alt='elips'/>
             </div>
             <div className='water'> 
                  <img src={adventure} className='hist' alt='adv'/>
                  <h2>Adventure</h2>
                  <img className='elips' src={elips} alt='elips'/>
               </div>
             <div className='water'> 
               <img src={water} className='hist' alt='water'/>
                  <h2>Water</h2>
                  <img className='elips' src={elips} alt='elips'/>
               <img className='elips' src={elips} alt='elips'/>
             </div>
             <div className='water'> 
               <img src={urban} className='hist' alt='water'/>
                  <h2>Urban</h2>
                  <img className='elips' src={elips} alt='elips'/>
               <img className='elips' src={elips} alt='elips'/>
             </div>
             <div className='water'> 
               <img src={forest} className='hist' alt='water'/>
                  <h2>Forests</h2>
                  <img className='elips' src={elips} alt='elips'/>
               <img className='elips' src={elips} alt='elips'/>
             </div>
           </section>
        </div>
    )
}

export default Typstravel
