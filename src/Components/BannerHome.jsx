import React from 'react';
import classes from './BannerHome.module.css';
const BannerHome = ()=>{
    return <div className={classes.banner}>
        <div className={classes.leftContent}>
        <h1>Stay curious.</h1>
        <p>Discover stories, thinking, and expertise from writers on any topic.</p>
        <button className={classes.btn}>Start Reading</button>
        </div>
        <div className={classes.rightContent}>
        </div>
    </div>
}

export default BannerHome;