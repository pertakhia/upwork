import React from 'react'
import './place.css'
import map from '../../icon/map.svg'
import path from '../../icon/path.svg'

const Place = () => {
    return (
        <div className='container1'>
            <h1 className='place-text'>Places Traveled</h1>
            <div className='map-img-cont'>
            <article className='map-img'>
                <img className='map' src={map} alt='map'/>
                <img className='path' src={path} alt='path'/>
                <img className='path1' src={path} alt='path'/>
                <img className='path2' src={path} alt='path'/>
                <img className='path3' src={path} alt='path'/>
                <img className='path4' src={path} alt='path'/>
                <img className='path5' src={path} alt='path'/>
                <img className='path6' src={path} alt='path'/>
            </article>
            </div>
           
        </div>
    )
}

export default Place
