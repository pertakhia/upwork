import React from 'react'
import iconfb from '../icon/fb.svg'
import twit from '../icon/twit.svg'
import google from '../icon/google.svg'
import iamges from '../image/slider.png'
import svgserch from '../icon/litle-search.svg'
import mount from '../image/moun.svg'
const Login = () => {

    const submitHandler = () => {

    }

    return ( 
         <div>
         <div className='section-box'>
                 <article className='left-side '>
                     <h1 className='left-side-text'>Lorem Ipsum - All the facts</h1>
                     <p className='left-side-paragrap'>Reference site about Lorem Ipsum, giving information on its origins.</p>
                     <button type='button' className='left-side-btn'>
                     Request access
                     </button>
                     <img className='image-slider' src={iamges} alt='slid'></img>
                 </article>
                 <article  className='testing'>
                     <div className='login'>
                     <div  className='' >
                         <div className='social'>
                             

                             <button className='btnfb'>
                                 <div className='btn-icon-fb'>
                                     <img  src={iconfb} alt='fb'></img>
                                  </div>
                                  <div className='line3'>

                                  </div>
                                 Login with Facebook
                                 </button>
                             <button className='btnfb '>
                             <div className='btn-icon-fb'>
                                     <img  src={twit} alt='twitter'></img>
                                  </div>
                                  <div className='line3'>

                                  </div>
                                 Login with Twitter</button>
                        
                             <button  className='btnfb' >
                             <div className='btn-icon-fb'>
                                     <img  src={google} alt='google'></img>
                                  </div>
                                  <div className='line3'>

                                  </div>
                                 Login with Google+</button>
                       
                            
                         </div> 
                     </div>
                     <div className='lineposicion'>
                          <div className='line2'>
                             <div className='circle2'>
                                 <h5 className='or'>OR</h5>
                             </div>
                          </div>
                          
                     </div>
                     <div className='form1'>
                         <h1 className='text'>Sign in Manually</h1>
                         <form  className='formcontainer' onSubmit={submitHandler}  autoComplete="off">
                             
                             <label htmlFor="email"></label>
                               <input  type="email" id="email" name="email" autoComplete="off" placeholder='Username or email'></input>
                               <label htmlFor="pwd"></label>
                               <input type="password" id="pwd" name="pwd" minLength="8" autoComplete="off" placeholder='Password'></input>
                          
                              <div className='btn-rem'>
                              <input type='checkbox'  name='remember'></input>
                              <label htmlFor="remember" className='remember'> Remember me</label>
                              <button type='submit'>LOGIN</button>
                              </div>
                              <div className='forget'>
                                  <a > Register Now</a>
                                   <div className='line4'></div>
                                  <a>Forgot Password?</a>
                              </div>
                         
                         </form>
                     </div>
                     </div>
                     <div className='place-person'>
                          <div className='circle-flex'>
                                   
                                    <input type='checkbox'  className='smile-circle' name='remember'></input>

                                    <h6 className='text-sircle'>Place </h6>
                                    <input type='checkbox'  className='smile-circle2' name='remember'></input>
                                    <h6 className='text-sircle'>Person </h6>
                          </div>
                          <div className='search-place'> 
                                  <label htmlFor="text"></label>
                                  <input type='text' name='text'  autoComplete="off"></input>
                                   <button type='button' className='svgsearch'> <img  src={svgserch} alt='serach'></img></button> 
                          </div>
                     </div>
                     <h3 className='join'>Join</h3>
                     <div className='place-place'>
                         <div className='position-z-index'>
                             <form  >
                                 <div className='join-info'>
                                     <label htmlFor="text"></label>
                                     <input type='text' name='text' autoComplete="off" placeholder='Enter your name'></input> 
                                     <label htmlFor="text"></label>
                                     <input className='left-fix' type='text' name='text' autoComplete="off" placeholder='Enter your username'></input> 
                                  </div>
                                  <div className='join-info'>
                                      <label htmlFor="email"></label>
                                      <input type='email' name='email'autoComplete="off"  placeholder='Enter your Email'></input> 
                                      <label htmlFor="text"></label>
                                      <input className='left-fix' type='text' name='text' autoComplete="off" placeholder='Enter your DOB'></input> 
                                  </div>
                                  <div className='join-info'>
                                      <label htmlFor="pwd"></label>
                                      <input type='password' name='pwd'  autoComplete="off" placeholder='Enter your Password'></input> 
                                      <label htmlFor="pwd"></label>
                                      <input className='left-fix2' type='password' name='pwd' autoComplete="off" placeholder='Re-enter your Password'></input> 
                                  </div>
                                  <div className='join-paragrap'>
                                        <h3>Optional but highly recommended. This will help in user search 
                                          based on these details. You can even add/edit this after joining 
                                            from your profile page.
                                       </h3>
                                  </div>

                                  <div className='join-info-select'>
                                    <select id="country" name="country" autoComplete="off" >
                                        <option value="num">Select Countries Travelled</option>
                                         <option value="Georgia">Georgia</option>
                                        <option value="Usa">USA</option>
                                        <option value="German">German</option>
                                       <option value="china">china</option>
                                   </select>         
                                   <label htmlFor="text"></label>
                                     <input type='text' name='text' autoComplete="off" placeholder='Country Live In'></input>         
                                  </div>
                                  <div className='join-info-finish'>
                                      <div className='join-info-btn'>
                                      <label htmlFor="text"></label>
                                      <input  type='text' name='text' autoComplete="off" placeholder='Country Currently In'></input>
                                     
                                      <label htmlFor="text"></label>
                                      <input className='margin-top' type='text' name='text' autoComplete="off" placeholder='Interests'></input>
                                      </div>
                                      <div className='join-info-textarea'>
                                          <textarea placeholder='Bio' autoComplete="off" >

                                          </textarea>
                                          <button className='btn-fixed' type='submit'>GO</button>
                                      </div>
                                  </div>
                                 
                             </form>
                         </div>
                     </div>
                 </article>
         <div className="image-back"  >
             <img  className='image-fixed-but' src={mount} alt='mount'></img>
        </div>
        </div>
        </div>
        
)
}

export default Login
