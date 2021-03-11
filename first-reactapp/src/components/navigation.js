import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navigation(){
    const[showMenu, setShowmenu] = useState(false);
    let menuMask;
    let menu;
     if(showMenu){
         menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
             this is menu
         </div> 

menuMask = 
<div className ="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
onClick={() => {setShowmenu(false)}}>
  
</div>

     }

     
    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                icon={faBars}
                onClick={() => {setShowmenu(!showMenu)}}
                
                />
            </span>
            {menuMask}
            {menu}
            
            </nav>
    
    )
}

export default Navigation;
