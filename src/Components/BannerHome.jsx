import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BannerHome.module.css';
const BannerHome = ()=>{
    return <div className={classes.banner}>
        <div className={classes.leftContent}>
        <h1>Stay curious.</h1>
        <p>Discover stories, thinking, and expertise from writers on any topic.</p>
       <Link to='/about-us'><button className={classes.btn}>Start Reading</button></Link>
        </div>
        <div className={classes.rightContent}>
        </div>
    </div>
}

export default BannerHome;