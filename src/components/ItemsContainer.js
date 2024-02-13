// import React from "react";
import Item from "./Item"
import {HOME,SERVICES,ABOUTUS,DONATE,CONTACT} from "./Menus"
export default function ItemsContainer(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16 ">
            <Item Links={HOME} title="HOME"/>
            <Item Links={SERVICES} title="SERVICES"/>
            <Item Links={ABOUTUS} title="ABOUTUS"/>
            <Item Links={DONATE} title="DONATE"/> 
            <Item Links={CONTACT} title="CONTACT"/>          
        </div>
        
    )
}