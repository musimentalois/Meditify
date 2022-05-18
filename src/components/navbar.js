import React from 'react';
import Navbarlist from './menulist'
export default function Navbar(){
    return(
        <div className="navbar bg-black text-white h-20">
              <h1 className="logo text-4xl ml-40">Meditify</h1>
<ul className="navbar-list font-light list-none flex justify-end">
    {Navbarlist.map((props,index)=>{
        return(
            <li key={index}>
                <a scr={props.url} className={props.cName}>{props.title}</a>
            </li>
        )
    })}

</ul>
        </div>
    )
}