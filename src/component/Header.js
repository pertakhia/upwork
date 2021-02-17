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
    const { isSidebarOpen, openSidebar,  closeSidebar} = useGlobalContext();
    return (
        <header >
            <article className={`${isSidebarOpen ?  'show-sidebar article-page'  : 'article-page'}`}  >
            <ul className='sidbaropen'>
              <Link to="/home">
                   <li >Home</li>
              </Link>  
              <Link to="/pages">
                   <li >Pages</li>
              </Link>
              <Link to="/travel">
                   <li >Travel</li>
              </Link>
              <Link to="/blog">
                   <li >Blog</li>
              </Link>
              <Link to="/elements">
                   <li >Elements</li>
              </Link>
              <Link to="/shop" >
                   <li className='margin' >Shop</li>
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
               <img src={logo} alt="logo"></img>
            </div>
            <button  className={`${ !isSidebarOpen ? 'btn-active-no' : 'btn-active'}`}    onClick={closeSidebar}>
          <FaTimes className='fatims' />
             </button>
            <button onClick={openSidebar}   className={`${ isSidebarOpen ? 'buttonactive ' : 'buttonbar'}`}>
                 <FaBars className='fabar'/>
            </button>
            <ul className='navigation  hiden'>
              <Link to="/home">
                   <li >Home</li>
              </Link>  
              <Link to="/pages">
                   <li >Pages</li>
              </Link>
              <Link to="/travel">
                   <li >Travel</li>
              </Link>
              <Link to="/blog">
                   <li >Blog</li>
              </Link>
              <Link to="/elements">
                   <li >Elements</li>
              </Link>
              <Link to="/shop" >
                   <li className='margin' >Shop</li>
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
