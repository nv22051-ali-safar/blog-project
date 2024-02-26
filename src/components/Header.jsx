import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {MdKeyboardArrowDown} from "react-icons/md";
import { images } from '../constants'

const navItemsInfo = [
    { name: "Home", type: "link" },
    { name: "Articles", type: "link" },
    { name: "Pages", type: "dropdown", items: ['About us, Contact us'] },
    { name: "Pricing", type: "link" },
    { name: "FAQ", type: "link" },

]

const NavItem = ({ item }) => {
    return (
        <li className='relative group'>
            {item.type == "link" ? (<><a href="/" className='px-4 py-2'>
                {item.name}
            </a>
            <a href="/" className='px-4 py-2'>
                {item.name}
            </a>
            <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
                /
            </span></>)
             : (
             <></>)}
        </li>
    )
}

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    }
    return (
        <section>
            <header className="container mx-auto px-5 flex justify-between py-4 items-center">
                <div>
                    <img className="w-16" src={images.Logo} alt="Logo" />
                </div>

                <div className='lg:hidden z-50'>
                    {navIsVisible ? (
                        <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} />
                    ) : (
                        <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
                    )
                    }
                </div>


                <div className={'${navIsVisible ? "right-0" : "-right-full" } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hand lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center'}>
                    <ul className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
                </div>
            </header>
        </section>
    )
}

export default Header;