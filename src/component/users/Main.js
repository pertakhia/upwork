import React from 'react'
import person from '../../icon/person.svg'
import topimg from '../../icon/top-left.svg'
import butimg from '../../icon/button-right.svg'
import fbbtn from '../../icon/fbShape.svg'
import twbtn from '../../icon/twShape.svg'
import lkbtn from '../../icon/linkedin.svg'
import righticon from '../../icon/right.svg'
import vector from '../../icon/Vector.svg'
import vector1 from '../../icon/Vector1.svg'
import vector2 from '../../icon/Vector2.svg'
import vector3 from '../../icon/Vector3.svg'
import vector4 from '../../icon/Vector4.svg'
import vector5 from '../../icon/Vector5.svg'
import './main.css'

const Main = () => {
    return (
        <div className='container1'>
            <div className='middle-box'> 
                <section className='img-btn'>
                    <div className='person-img'>
                       <img className='img-border' src={person} alt='person'/>  
                       <img className='img-top' src={topimg} alt='personimg'/>
                       <img className='img-button' src={butimg} alt='personimg'/>
                    </div>
                    <div className='private-btn'>
                        <button type='button'>Private</button>
                        <button type='button'>Public</button>
                    </div>     
               </section>
               <section className='follow'> 
                   <h1>Hi! I'M Jenny ; Let’s Go Travel!</h1>
                   <div className='contact-btn'>
                   <button type='button'>Contact ME</button>
                  <button type='button'>Following</button>
                   </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip consequat.
                     </p>
                     <h2>Jenny Wilson</h2>
                </section>

                <section className='right-third'>
                    <div className='right-box'>
                        <div className='right-box-info'>
                            <div className='red-box' >
                                <img className='red-box-child' src={vector} alt='a'/>
                                <img  className='red-box-child1' src={vector1} alt='ab'/>
                            </div>
                            <div className='contris'>
                                <h5>25</h5>
                                <p>Contries Travlled</p>
                            </div>
                           <img className='next-icon' src={righticon} alt='next'/>
                        </div>
                        <div className='right-box-info'>
                            <div className='red-box1' >
                                <img className='red-box-child2' src={vector2} alt='a'/>
                                <img  className='red-box-child3' src={vector3} alt='ab'/>
                            </div>
                            <div className='contris1'>
                                <h5>500</h5>
                                <p>Followers</p>
                            </div>
                           <img className='next-icon' src={righticon} alt='next'/>
                        </div>
                        <div className='right-box-info'>
                            <div className='red-box2' >
                                <img className='red-box-child4' src={vector4} alt='a'/>
                                <img  className='red-box-child5' src={vector5} alt='ab'/>
                            </div>
                            <div className='contris2'>
                                <h5>50</h5>
                                <p>Following</p>
                            </div>
                           <img className='next-icon' src={righticon} alt='next'/>
                        </div>
                    </div>
                    <div className='profil-rank'>
                        <div className='profil-percent'>
                        <h4>Profile Ranking</h4>
                        <p>92%</p>
                        </div>
                           <div className='green-line1'>
                              <div className='blue-line'> </div>
                        </div>
                        
                    </div>
                    <div className='lng-padd'>
                       <h2 className='language'>Languages </h2>
                        <p>English</p>
                        <h5 className='location'>Location</h5>
                        <p>Florida, USA</p>
                    </div>
                    <div className='icons'> 
                        <button type='button'> <img src={fbbtn} alt='fb'/> </button>
                        <button type='button'> <img src={twbtn} alt='fb'/> </button>
                        <button type='button'> <img src={lkbtn} alt='fb'/> </button>
                    </div>
                       
                </section>

            </div>
        </div>
        )
    }

export default Main
