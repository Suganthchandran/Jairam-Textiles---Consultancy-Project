import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../styles/SearchBar.css'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        if(location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    },[location])

  return showSearch && visible ? (
    <div className='searchbar'>
      <div className='searchbar-items'>
        <input className='searchbar-input' type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} autoFocus/>
        <img src={assets.search_icon} />
      </div>
      <img className='searchbar-close' src={assets.cross_icon} onClick={()=>setShowSearch(false)}/>
    </div>
  ) : null
}

export default SearchBar
