import React from 'react'
import './feeds.css'
import point from '../../icon/point.svg'
import fire from '../../icon/fire.svg'
import time from '../../icon/time.svg'
import star from '../../icon/star.svg'
import reply from '../../icon/reply.svg'



const Feedbox = () => {
    return (
        <article className='feed-box'>
                <div className='feed-box1'>
                <div className='fire'>
                          <img src={fire} alt='fire'/>
                     </div>
                     <div>
                         <div className='feed-person'>
                         <h3>Ken Thomas</h3>
                          <p>@kenthomas</p>
                         </div>
                       
                     </div>
                     <div className='point'>
                     <img src={point} alt='point'/>
                     </div>
                </div>   
                <div className='feed-paragrap'>
                    <p>Lorem ipsum dolor amet consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div> 
                <div className='feed-coment'>
                    <article className='feed-coment-box' >
                        <div className='feed-time'>
                           <img src={time} alt='time'/>
                           <p>18 min ago</p>
                        </div>
                        <div  className='feed-star'>
                        <img src={star} alt='star'/>
                           <p>Favorite</p>
                        </div>
                        <div  className='feed-reply'>
                        <img src={reply} alt='reply'/>
                           <p>Reply</p>
                        </div>
                    </article>
                   
                </div>
            </article>
    )
}

export default Feedbox
