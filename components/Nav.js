"use client"

import { useState } from 'react';
import headerStyle from '../src/app/css/header.module.css'
import { FaTimes } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa6";
import Link from 'next/link';
const Navigation = () => {
    const [isClick, isSetClick] = useState(false);
    const toggleNavbar = () => {
        isSetClick(!isClick);
    }
    // const hide = document.body.offsetWidth < 760 ? {}: { display: "none" };
    // console.log(hide);
    return (
        <header className={headerStyle.header}>
            <div className='container'>
                <nav className={headerStyle.nav}>
                    <Link href='/' className={headerStyle.logo}>Nur-Soft</Link>
                    <ul className={headerStyle.ul} style={isClick ? { transform: "scale(1)" } : {}}>
                        <li><Link href='/' className={`${headerStyle.link} ${headerStyle.active}`}>Home</Link></li>
                        <li className={headerStyle.mainMenu}><a className={`${headerStyle.link}`}>Service</a>

                            <div className={headerStyle.dropdown}>
                                <ul>
                                    <li><Link href='/service/software_development' className={headerStyle.dropdown_link}>Sofware Development Service</Link></li>
                                    <li><Link href='/service/Soft_traning' className={headerStyle.dropdown_link}>Software Development Training</Link></li>
                                    <li><Link href='/service/Web' className={headerStyle.dropdown_link}>Website Development Service</Link></li>
                                    <li><Link href='/service/it' className={headerStyle.dropdown_link}>IT Consultancy Service</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link href='/portfolio' className={headerStyle.link}>portfolio</Link></li>
                        <li><Link href='/blog' className={headerStyle.link}>blog</Link></li>
                        <li><Link href='/contact' className={headerStyle.link}>Contact Us</Link></li>
                    </ul>
                    <button onClick={toggleNavbar} className={headerStyle.menuBar}>
                        {isClick ? (
                            <FaTimes />
                            // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16" className={headerStyle.bars}>
                            //     <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
                            // </svg>
                        ) : (
                            <FaAlignRight />
                            // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16" className={headerStyle.bars}>
                            //     <path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"></path>
                            // </svg>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;