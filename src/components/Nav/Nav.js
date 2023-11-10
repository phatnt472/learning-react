import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component{
    render() {
        return <div className="h-14 w-[100%] bg-gray-500 text-left">
            <NavLink to="/" className={({isActive}) => (`inline-block px-[16px] leading-[56px] ${!isActive ? "hover:bg-gray-100 hover:text-black" : "bg-green-300"}`)} exact={true} >Home</NavLink>
            <NavLink to="/todo" className={({isActive}) => (`inline-block px-[16px] leading-[56px] ${!isActive ? "hover:bg-gray-100 hover:text-black" : "bg-green-300"}`)}>Todo</NavLink>
            <NavLink to="/about" className={({isActive}) => (`inline-block px-[16px] leading-[56px] ${!isActive ? "hover:bg-gray-100 hover:text-black" : "bg-green-300"}`)}>About</NavLink>

        </div>
    }
}

export default Nav;