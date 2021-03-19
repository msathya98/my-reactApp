import React from 'react'
import headerStyles from "../styles/Home.module.css";

const Header = () => {
    const x = 4;
    return (
        <div className={headerStyles.main}>
            <h1 className={headerStyles.title}>
                <span>Webdev</span>
                News
            </h1>
            <p>it is a webpage of our company .. super super</p>
        
        </div>
    )
}

export default Header
