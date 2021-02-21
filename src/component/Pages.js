import React from 'react'
import minus from '../icon/minus.svg'
import plus from '../icon/plus.svg'
import mount from '../image/moun.svg'

const Pages = () => {
    return (
        <section  className='header-color'>
            <div  >
                <div className='text-center'>
                    <h1>Create an Itinerary</h1>
                 </div>
              <article>
                  <div className='form-center'>
                      <aside className='basic-info'>
                          <h2>Basic Info</h2>
                          <button className='btn-toggle'> <img src={minus} alt='minus'></img> </button>
                      </aside>
                      <form className='form-info'>
                          <label htmlFor="textname"></label>
                          <input type='text' name='textname' autoComplete="off" placeholder='Trip Name'></input>
                          <label htmlFor="text"></label>
                          <input type='text' name='text' autoComplete="off" placeholder='Author Name'></input>
                          <div className='upload-relative'>
                          <label htmlFor="text-img">    </label>
                          <input type='text' name='text-img' autoComplete="off" placeholder='Author Pic'></input>
                          <button type='button' className='upload'>
                               Upload
                          </button>
                          </div>
                          <textarea className='textarea-info' placeholder='Author Bio' autoComplete="off" >

                          </textarea>
                          <div className='btn-submit-center'>
                              <button type='submit' className='btn-submit'> DONE</button>
                          </div>
                          
                      </form>
                  </div>
                  
              </article>  
              <div className='fixed-pos'>
              <article className='photo-video'>
                  <aside className='basic-info'>
                          <h2>Photos & Videos</h2>
                          <button className='btn-toggle1'>  <img src={plus} alt='plus'></img>   </button>
                  </aside>
              </article>
              <article className='trip-info'>
                  <aside className='basic-info'>
                          <h2>Trip Info</h2>
                          <button className='btn-toggle1'>  <img src={plus} alt='plus'></img>   </button>
                  </aside>
              </article>
              <article className='trip-info'>
                  <aside className='basic-info'>
                          <h2>Activities</h2>
                          <button className='btn-toggle1'>  <img src={plus} alt='plus'></img>   </button>
                  </aside>
              </article>
              <article className='trip-info'>
                  <aside className='basic-info'>
                          <h2>Review & Submit</h2>
                          <button className='btn-toggle1'>  <img src={plus} alt='plus'></img>   </button>
                  </aside>
                 
              </article>
              <img  className='image-fixed-but image-back1' src={mount} alt='mount'></img>
              </div>
              
              
            </div>
           
           
        </section>
    )
}

export default Pages
