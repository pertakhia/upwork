import React from 'react'
import logo from '../icon/redlogo.svg'
import search from '../icon/search-1.svg'
import user from '../icon/user.svg'
import youtube from '../icon/youtube.svg'
import printest from '../icon/printest.svg'
import inst from '../icon/instagram.svg'
import facebook from '../icon/facebook.svg'
import  { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';


const Header = () => {
    const { 
         isSidebarOpen, 
         openSidebar,  
         closeSidebar,
         hiddenHeader,
     } = useGlobalContext();
    return (
        <header  >
            <article className={`${isSidebarOpen ?  'show-sidebar article-page'  : 'article-page'}`}  >
            <ul className='sidbaropen'>
              <Link to="/home" className='home'>
                   <li >Home</li>
              </Link>  
              <Link to="/pages" className='home'>
                   <li >Pages</li>
              </Link>
            <Link to="/travel" className='home' >
            <li >Travel</li>
            </Link>
              <Link to="/blog" className='home'>
                   <li >Blog</li>
              </Link>
              <Link to="/elements" className='home'>
                   <li >Elements</li>
              </Link>
              <Link to="/shop"  className='home'>
                   <li  >Shop</li>
              </Link>
              <Link to="/login"className='home' >
                   <li className='margin' >Login</li>
              </Link>
            </ul>
            <ul className='sidbarlogo'>
                <Link to="/">
                <div className='box'> 
                  <div className='circle'></div>
                 <img src={user} alt="user"></img> 
                 </div>  
                </Link>
                
               <div className='box'><img src={youtube} alt="youtube"></img></div>
               <div className='box'><img src={printest} alt="printest"></img></div>
               <div className='box'><img src={inst} alt="instagram"></img></div>
               <div className='box'><img src={facebook} alt="facebook"></img></div>
               <div className='box1'> <img src={search} alt="search"></img></div>
                
            </ul>
            </article>
          <nav className='container'>
            <div className="logocursor">

             <Link to="/home">
            <img src={logo} alt="logo"></img>
              </Link>  
              
            </div>
            <button  className={`${ !isSidebarOpen ? 'btn-active-no' : 'btn-active'}`}    onClick={closeSidebar}>
          <FaTimes className='fatims' />
             </button>
            <button onClick={openSidebar}   className={`${ isSidebarOpen ? 'buttonactive ' : 'buttonbar'}`}>
                 <FaBars className='fabar'/>
            </button>
            <ul className='navigation  hiden'>
              <Link to="/home" className='home'>
                   <li >Home</li>
              </Link>  
              <Link to="/pages" className='home'>
                   <li >Pages</li>
              </Link>
              <Link to="/travel" className='home'>
                   <li  >Travel</li>
              </Link>
              <Link to="/blog" className='home'>
                   <li >Blog</li>
              </Link>
              <Link to="/elements" className='home'>
                   <li >Elements</li>
              </Link>
              <Link to="/shop"  className='home'>
                   <li  >Shop</li>
              </Link>
              <Link to="/login"  className='home'>
                   <li className='margin' >Login</li>
              </Link>
            </ul>
            <ul className='logo hiden'>
                <Link to="/">
                <div className='box'> 
                  <div className='circle'></div>
                 <img src={user} alt="user"></img> 
                 </div>  
                </Link>
                
               <div className='box'><img src={youtube} alt="youtube"></img></div>
               <div className='box'><img src={printest} alt="printest"></img></div>
               <div className='box'><img src={inst} alt="instagram"></img></div>
               <div className='box'><img src={facebook} alt="facebook"></img></div>
               <div className='line'></div>
               <div className='box1'> <img src={search} alt="search"></img></div>
                
            </ul>
        </nav>
        </header>
       
    )
}

export default Header
