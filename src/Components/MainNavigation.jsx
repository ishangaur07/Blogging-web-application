import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../Components/MainNavigation.css';
const NavBar = () => {

    const [activeElement, setActiveElement] = useState('home');

    const onClickActive = (event) => {
        setActiveElement(event);
        console.log(event);
    };

    return (
        <header className='header'>
            <div className='logo'>
                <img src='https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png' alt='important'></img>
            </div>
            <div className='list-block'>
                <ul className="list">
                    <li>
                        <Link
                            to='/'
                            className={activeElement === 'home' ? 'active' : ''}
                            onClick={() => onClickActive('home')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about-us'
                            className={activeElement === 'about' ? 'active' : ''}
                            onClick={() => onClickActive('about')}
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to='/blogs'
                            className={activeElement === 'blogs' ? 'active' : ''}
                            onClick={() => onClickActive('blogs')}>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/write-post'
                            className={activeElement === 'write-post' ? 'active' : ''}
                            onClick={() => onClickActive('write-post')}>Write Post</Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default NavBar;