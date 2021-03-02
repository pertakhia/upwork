import React, { useEffect, useRef } from 'react'
import '../font/font1.css'
import '../font/font2.css'
import '../font/font.css'
import './users/travel.css'
import logo from '../icon/logoipsum.svg'
import girl from '../image/girl.svg'
import reavelsearch from '../icon/travelsearch.svg'
import audio from '../icon/audio.svg'
import sms from '../icon/sms.svg'
import heart from '../icon/heart.svg'
import plustravel from '../icon/travelplus.svg'
import tringle from '../icon/tringle.svg'
import image from '../image/image.svg'
import image1 from '../image/image1.png'
import image2 from '../image/image3.svg'
import image3 from '../image/image4.png'
import { useGlobalContext } from './context';



const Travel = () => {

    const  { showImg,setShowImg,openImg, closeImg, location , yes} = useGlobalContext();

    const container = useRef(null)
    

    const  displayImg = (e) => {
        //    const image = e.target.src();
           
           const tempBtn = e.target.getBoundingClientRect();
           const ifbottom = tempBtn.bottom;
           const ifleft = tempBtn.left;
           const center = tempBtn.right+100 ;
           const leftimg =tempBtn.left-400;
           const bottom = tempBtn.bottom - 350;
           const bottom1 = tempBtn.bottom - 600;
           const wow = e.target.src;
           openImg(wow,{center, bottom, leftimg, ifleft, ifbottom, bottom1});
    }

    useEffect(()=> {
        const subImg = container.current;
        const {center, bottom, leftimg, ifleft, ifbottom, bottom1 } = location;
        if(ifleft > 780 && ifbottom < 700) {
            subImg.style.left = `${leftimg}px`
            subImg.style.top = `${bottom}px`
        } else if (ifleft > 780 && ifbottom > 700){
            subImg.style.left = `${leftimg}px`
            subImg.style.top = `${bottom1}px`
        } else {
            subImg.style.left = `${center}px`
            subImg.style.top = `${bottom}px`
        }

       },[location])


    return (
        <main className='container2'>
           
                <div className={`${showImg ? 'img-show-box  hidden-resp' : ' img-show-hide'}`} ref={container}>
                  <img src={yes} alt=''/>
                </div>
                {/* onMouseEnter={openImg} onMouseLeave={closeImg} */}
            
           
            <section className='travel-flex'  >
                <aside className='left-aside-travel'>
                    <div className='center-travel'>
                       <img className='aside-logo' src={logo} alt='logo'/>
                    </div>
                    <div className='center-travel1'>
                       <img className='aside-girl' src={girl} alt='logo'/>
                       <h2 className='aside-girl-text'>Emma Watson</h2>
                       <p className='aside-girl-p'> New York, NY</p>
                       <div className='aside-post-follow'>
                           <div className='aside-post'>
                               <h4>Post</h4>
                               <p>116</p>
                           </div>
                           <div className='aside-post'>
                               <h4>Followers</h4>
                               <p>50m</p>
                           </div>
                           <div className='aside-post'>
                               <h4>Following</h4>
                               <p>47m</p>
                           </div>
                       </div>
                    </div>
                    <ul className='ul-aside'>
                        <li className='li-aside'>Home</li>
                        <li  className='li-aside'>Chirps</li>
                        <li  className='li-aside'>Blogs</li>
                        <li  className='li-aside'>Vlogs</li>
                        <li  className='li-aside'>Bird</li>
                        <li  className='li-aside'>Finder</li>
                    </ul>
                   
                </aside>
                <article className='right-article'>
                    <div className='img-galery-top'>
                       <div className='travel-search'>
                       <label htmlFor="texttravel"></label>
                       <input className='travel-input' type='text' name='texttravel' autoComplete="off" placeholder='Search'></input>
                       <button type='button' className='travel-search-btn'> <img  className='travel-img-width' src={reavelsearch} alt='serach'/></button>
                       <button type='button' className='travel-search-btn1'> <img  className='travel-img-width1' src={audio} alt='serach'/></button>
                       </div>
                       <div className='travel-creat-btn'>
                           <div className='sms-heart' >
                           <img className='sms' src={sms} alt='sms'/>
                           <img className='heart' src={heart} alt='heart'/>
                           </div>
                           <div className='btn-create-center'>
                            <button className='btn-create'  > <img  className='plus-img' src={plustravel} alt='plus'/> Create New Post </button>
                           <div className='girl-img'> <img  src={girl} alt='girl'/></div>  
                           <img  src={tringle} alt='trn'/>
                           </div>
                       </div>
                    </div>
                     <div className='text-galery'>
                         <h1 className='text-galery-h1'>
                         All Itinerary
                         </h1>
                         <button className='text-galery-btn'>
                         View All Itinerary
                         </button>
                    </div>
                    <div className='img-flex' >
                         <div className='image' onMouseOver={displayImg} onMouseLeave={closeImg}  >
                             <div className='shadow'></div>
                         <img  src={image} alt='img'/>
                         </div>
                         <div className='image'  onMouseOver={displayImg} onMouseLeave={closeImg}>
                         <div className='shadow'></div>
                         <img  src={image1} alt='img'/>
                         </div>
                         <div className='image' onMouseOver={displayImg} onMouseLeave={closeImg}>
                         <div className='shadow'></div>
                         <img  src={image2} alt='img'/>
                         </div>
                         <div className='image' onMouseOver={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image3} alt='img'/>
                         </div>
                         <div className='image' onMouseOver={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image} alt='img'/>
                         </div>
                         <div className='image' onMouseOver={displayImg}  onMouseLeave={closeImg}>
                         <div className='shadow'></div>
                         <img  src={image1} alt='img'/>
                         </div>
                         <div className='image'onMouseEnter={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image2} alt='img'/>
                         </div>
                         <div className='image' onMouseOver={displayImg} onMouseLeave={closeImg}>
                         <div className='shadow'></div>
                         <img  src={image3} alt='img'/>
                         </div>
                         <div className='image'onMouseOver={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image} alt='img'/>
                         </div>
                         <div className='image'onMouseEnter={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image1} alt='img'/>
                         </div>
                         <div className='image'onMouseEnter={displayImg}  onMouseLeave={closeImg}>
                         <div className='shadow'></div>
                         <img  src={image2} alt='img'/>
                         </div>
                         <div className='image' onMouseEnter={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image3} alt='img'/>
                         </div>
                         <div className='image' onMouseOver={displayImg} onMouseLeave={closeImg}>
                         <div className='shadow'></div>
                         <img  src={image3} alt='img'/>
                         </div>
                         <div className='image'onMouseOver={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image} alt='img'/>
                         </div>
                         <div className='image'onMouseEnter={displayImg} onMouseLeave={closeImg} >
                         <div className='shadow'></div>
                         <img  src={image1} alt='img'/>
                         </div>
                    </div>
                    <div className='travel-footer-btn'>
                        <button>
                        <img  className='plus-img-footer' src={plustravel} alt='plus'/>
                        View More
                        </button>
                    </div>
                </article>  
            </section>  
             
        </main>
    )
}

export default Travel
