import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'


const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nulla labore aliquam. Officia officiis consequatur facilis necessitatibus natus corrupti unde tempore inventore animi?</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div  key={index}className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
