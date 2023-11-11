import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    listNav = [
        {
            to: "/",
            content: 'Home'
        },
        {
            to: "/todo",
            content: 'Todo'
        },
        {
            to: "/about",
            content: 'About'
        },
        {
            to: "/user",
            content: 'User'
        }
    ]
    render() {
        return <div className="h-14 w-[100%] bg-gray-500 text-left">
            {this.listNav.map((value, index) => (
                <NavLink key={index} to={value.to} className={({ isActive }) => (`inline-block px-[16px] leading-[56px] ${!isActive ? "hover:bg-gray-100 hover:text-black" : "bg-green-300"}`)} >{value.content}</NavLink>
            ))}
        </div>
    }
}

export default Nav;