/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './assets/images/logo.png';
import { FiSearch } from "react-icons/fi";
import { RiChatNewLine } from "react-icons/ri";
import { RiDashboardLine } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import './Navigation.scss';

const Navigation = (props) => {
    console.log(props);

    return (
        <section className='navigation'>
            {/* <TopNavigation show={props.show} handleShow={props.handleShow} handleShowLogin={props.handleShowLogin} /> */}
            <NavButtons />    
        </section>
    );
}

const TopNavigation = (props) => (
                    <div className='section'>
                        <span className='logo'><img src={logo} alt='Logo'/></span>
                        <span>
                            <RiDashboardLine size={'1.5em'} color='black' />
                            <span>
                                Categories
                            </span>
                        </span>
                        <div className='search-div'>
                            <FiSearch size={'1.2em'} color='black' />
                            <span>Search for Solutions</span>
                        </div>
                        {/* <div className='right-top-nav'> */}
                            <span>
                                <RiChatNewLine />
                                <span>Create issue</span>
                            </span>
                            <div>
                                <button className='btn login-button' onClick={props.handleShowLogin}>Login</button>
                                <button className='btn signup-button' show={props.show} onClick={props.handleShow}>Signup</button>
                            </div>
                        {/* </div> */}
                        <div className='nav-menu'>
                            <HiMenuAlt1 size={'2em'} style={{alignSelf: 'flex-end'}}/>
                        </div>
                    </div>
);

const NavButtons = () => (
                    <div className='section section-below'>
                        <div className='tabs'>
                        <span className='logo'><img src={logo} alt='Logo'/></span>
                            <span><a href='#mission'>Our mission</a></span>
                            <span><a href='#what-we-offer'>What we offer</a></span>
                            <span><a href='#who-we-help'>Who we help</a></span>
                            <span><a href='#we-need-help'>We need help</a></span>
                            <span><a href='#how-it-works'>How it works</a></span>
                            <span><a href='#our-journey'>Our journey</a></span>
                            {/* <span><a href='#get-involved'>Get involved</a></span> */}
                            <span><a href='#contact'>Contact</a></span>
                        </div>
                    </div>
);

export default Navigation;
