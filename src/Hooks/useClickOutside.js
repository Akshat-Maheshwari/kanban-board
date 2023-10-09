import React, {useRef, useEffect} from 'react'

export default function useClickOutside(callback){
    let domNodeRef=useRef();
    useEffect(()=>{
        let handler=(e)=>{
            if(!domNodeRef.current?.contains(e.target)){
                callback();
            }
        }
        document.addEventListener('mousedown',handler)
        return ()=>{
            document.removeEventListener("mousedown",handler);
        }
    },[])
    return domNodeRef;
}