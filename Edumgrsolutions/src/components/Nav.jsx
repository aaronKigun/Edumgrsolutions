import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Nav.css'

const Nav = () => {
    React
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
	<>
	<header>
			<h2>Edumgr&nbsp;&nbsp;Solutions</h2>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/contact">Contact Us</a>
				<a href="/feature">Features</a>
				<a href="/pricing">Pricing</a>
        		<a href="/about">About us</a>
        		<a href="/account" className='dropdown'>
          			<span>Account</span>
          			<ul class="dropdown-content">
          			   <li className='up'>
						<a href='/signup'>Staff</a>
						</li>
          			   <hr></hr>
          			   <li className='down'>
						<a href='/signup'>Students</a>
						</li>
          			</ul>
        			</a><RiArrowDropDownLine className='icon'/>
			<button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
			</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
</>
	)
}

export default Nav
