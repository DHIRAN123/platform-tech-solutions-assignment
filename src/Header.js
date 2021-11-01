import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import { HelpOutlineIcon } from '@material-ui/icons/HelpOutline';
import {SettingsIcon} from '@material-ui/icons/Settings';
import {AppsIcon} from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';


function Header({photoURL}) {
    return (
        <div class="header">
            <div className="header__logo">
                <span>platform tech solutions</span>
            </div>
            <div className= "header__search">
                <SearchIcon/>
                <input type="text" placeholder="Search in Box"/>
                <FormatAlignCenterIcon/>
            </div>
            <div className= "header__icons">
                  <span>
                   
                   
                </span> 
<span>
    <AppsIcon/>
    <Avatar src={photoURL}/>
</span>
               
                
                </div>
        </div>
    )
}

export default Header;
