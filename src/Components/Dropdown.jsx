import React, { useState } from 'react';
import useClickOutside from '../Hooks/useClickOutside';
import '../Style/Dropdown.css';

export const Dropdown = ({children, trigger, parent}) => {
    const [show,setShow] = useState(false);
    const dropRef= useClickOutside(()=>setShow(false));
    const handleItemClick = () => {
      if(!parent) setShow(false);
    };
  return (
    <>
        <div className="dropdown" ref={dropRef} onClick={()=>setShow(!show)}>
          <div className="dropdown">{trigger}</div>
          {show &&
          <ul onClick={(event) => event.stopPropagation()}>
          {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                onClick: handleItemClick,
              });
            })}
          </ul>}
        </div>
    </>
  )
}

export function DropdownItem({children, onClick}){
    return <ul onClick={onClick}>{children}</ul>;
}