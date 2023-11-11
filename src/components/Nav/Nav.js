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
            {/* <NavLink to={"/"} className="inline-block px-[16px] leading-[56px]  hover:bg-gray-100 hover:text-black" activeClassName="bg-green-300" exact>Home</NavLink>
            <NavLink to={"/todo"} className="inline-block px-[16px] leading-[56px]  hover:bg-gray-100 hover:text-black" activeClassName="bg-green-300">Todo</NavLink>
            <NavLink to={"/about"} className="inline-block px-[16px] leading-[56px]  hover:bg-gray-100 hover:text-black" activeClassName="bg-green-300">About</NavLink>
            <NavLink to={"/user"} className="inline-block px-[16px] leading-[56px]  hover:bg-gray-100 hover:text-black" activeClassName="bg-green-300">User</NavLink> */}
            {this.listNav.map((value, index) => (
                <NavLink to={value.to} key={index} className= "inline-block px-[16px] leading-[56px] hover:bg-gray-100 hover:text-black" activeClassName="bg-green-300 hover:bg-green-300 hover:text-white" exact={true}>{value.content}</NavLink>
            ))}
        </div>
    }
}

export default Nav;