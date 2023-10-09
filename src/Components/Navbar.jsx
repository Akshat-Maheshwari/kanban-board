import React, { useState } from 'react'
import  {Dropdown, DropdownItem } from './Dropdown';
import { Capital } from '../Utility/Utils';
import {LuSlidersHorizontal} from 'react-icons/lu';
import '../Style/Navbar.css';

export const Navbar = ({handleOnClick, handleSort, group, sort}) => {
    const [displayOpen, setDisplayOpen]=useState(false);
    const [groupOpen, setGroupOpen]=useState(false);
    const [sortOpen, setSortOpen]=useState(false);
    return (
    <div className='navbar'>
        <Dropdown parent={true} trigger={ 
            <button className='drop_button'>
                <span className='drop_button_icon'><LuSlidersHorizontal /></span>
                Display
            </button>}>
            <div className='drop_container'>
                <div className='drop_container_item'>
                    <div className='label'>
                        Grouping
                    </div>
                    <div className='drop_trigger'>
                        <Dropdown parent={false} trigger={<button className='drop_button'>{Capital(group)}</button>}>
                            <div className='drop_select_container'>
                                    <DropdownItem>
                                        <button className='select_button' onClick={()=>handleOnClick("priority")}>Priority</button>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <button className='select_button' onClick={()=>handleOnClick("status")}>Status</button>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <button className='select_button' onClick={()=>handleOnClick("userId")}>User</button>
                                    </DropdownItem>
                            </div>
                        </Dropdown>
                    </div>
                </div>
                <div className='drop_container_item'>
                    <div className='label'>
                        Ordering
                    </div>
                    <div className='drop_trigger'>
                        <Dropdown parent={false} trigger={<button className='drop_button'>{Capital(sort)}</button>}>
                            <div className='drop_select_container'>
                                <DropdownItem>
                                    <button className='select_button' onClick={()=>handleSort("priority")}>Priority</button>
                                </DropdownItem>
                                <DropdownItem>
                                    <button className='select_button' onClick={()=>handleSort("title")}>Title</button>
                                </DropdownItem>
                            </div>
                        </Dropdown>
                    </div>
                </div>
                
            </div>
        </Dropdown>
    </div>
  )
}
