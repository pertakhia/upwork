import React from 'react'
import Feedbox from './Feedbox.js'
import './feeds.css'
import point from '../../icon/point.svg'
import fire from '../../icon/fire.svg'
import time from '../../icon/time.svg'
import star from '../../icon/star.svg'
import reply from '../../icon/reply.svg'
import fluz from '../../icon/fluz.svg'
import mount from '../../image/moun.svg'

const Feeds = () => {
    return (
        <div>
 <div className='container1 feed-div'>
            <article className='feed-text'>
                <ul className='feed-ul'>
                    <li>
                    Latest Activity
                    </li>
                    <li>
                    Feeds      
                    </li>
                    <li>
                    My Vlogs 
                    </li>
                    <li>
                    My Itinerar
                    </li>
                </ul>
            </article>
            <article className='feed-box'>
                <div className='feed-box1'>
                <div className='fire'>
                          <img src={fire} alt='fire'/>
                     </div>
                     <div>
                         <div className='feed-person'>
                         <h3>LilyParker</h3>
                          <p>@lilyparker007</p>
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
            <article className='feed-box'>
                <div className='feed-box1'>
                <div className='fire'>
                          <img src={fluz} alt='fire'/>
                     </div>
                     <div>
                         <div className='feed-person'>
                         <h3>John Doe</h3>
                          <p>@johndoe</p>
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
            <Feedbox/>
            <article className='feed-box'>
                <div className='feed-box1'>
                <div className='fire'>
                          <img src={fluz} alt='fire'/>
                     </div>
                     <div>
                         <div className='feed-person'>
                         <h3>Demmy Arove</h3>
                          <p>@demmyarove</p>
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
            <Feedbox />
            
           
        </div>
        <div className="image-back2"  >
                  <img  className='image-fixed-but2' src={mount} alt='mount'></img>
             </div>
        </div>
       
    )
}

export default Feeds
