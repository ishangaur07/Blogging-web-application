import React, { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './../Components/MainNavigation.css';
const NavBar = () => {

    const [activeElement, setActiveElement] = useState('home');
    const location = useLocation();

    useEffect(() => {
        // Extract the slug from the current URL path (e.g., "/about-us" -> "about-us")
        const slug = location.pathname.split('/')[1];
        setActiveElement(slug || 'home'); // If slug is empty, set 'home' as the active element
      }, [location]);

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'><img src='https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png' alt='important'></img></Link>
                
            </div>
            <div className='list-block'>
                <ul className="list">
                    <li>
                        <Link
                            to='/'
                            className={activeElement === 'home' ? 'active' : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about-us'
                            className={activeElement === 'about-us' ? 'active' : ''}
                            
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to='/blogs'
                            className={activeElement === 'blogs' ? 'active' : ''}
                            >Blogs</Link>
                    </li>
                    <li>
                        <Link to='/write-post'
                            className={activeElement === 'write-post' ? 'active' : ''}
                            >Write Post</Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default NavBar;