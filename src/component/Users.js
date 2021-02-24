import React from 'react'
import Main from './users/Main'
import Typstravel from './users/Typstravel'
import Place from './users/Place'
import Feeds from './users/Feeds'
import '../styles/users.css'



const Users = () => {
    return (
        <>
           <section>
               <div className='black-line'>
                         <div className='circle-green'></div>
                         <div className='circle-green'></div>
                         <div className='circle-green'> </div>
                         <div className='circle-green'></div>
                         <div className='green-line'>
                               <div className='circle-green-child'>
                                   <div className='box-hello'> 
                                   <div className='triangle'> </div>
                                    <h1>Hello again, Jenny</h1>
                                    <p>Complete profile, It’s 60%</p>
                                   </div>
                              </div>
                        </div>
                        <div className='accept-box'>
                            <div className='accept'>
                                <div className='triangle1'> </div>
                                <div className='center-user'>
                                    <div className='user-name'></div>
                                    <div className='text-paragrap'>
                                        <h1>Emma Jaden</h1>
                                        <p>Has made request to follow you</p>
                                    </div>
                                </div>
                                <div className='btn-center'>
                                    <button type='button'>Accept</button>
                                    <button type='button'>Decline</button>
                                </div>
                                
                            </div>
                        </div>
                        
               </div>
            
           </section>
           <Main/>
           <Typstravel/>
           <Place/>
           <Feeds/>
        </>
    )
}

export default Users
