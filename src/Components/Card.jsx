import React from 'react'
import '../Style/Card.css'
import {RxAvatar} from 'react-icons/rx';
import {PiCircleHalfFill} from 'react-icons/pi';
import {BsCircleFill ,BsExclamationSquareFill, BsThreeDots, BsCircle, BsDashCircleDotted} from 'react-icons/bs';
import {IoCheckmarkDoneCircle} from 'react-icons/io5';
import {MdOutlineCancel, MdSignalCellular1Bar,MdSignalCellular3Bar, MdSignalCellular4Bar} from 'react-icons/md';

function status(key){
  if(key==="In progress") return <PiCircleHalfFill size={20} color='#eac13b'/>;
  if(key==="Todo") return <BsCircle size={20} color='grey'/>;
  if(key==="Done") return <IoCheckmarkDoneCircle size={20} color='grey'/>;
  if(key==="Backlog") return <BsDashCircleDotted size={20} color='grey'/>;
  if(key==="Canceled") return <MdOutlineCancel size={20} color='grey'/>;
}
function priority(key){
    if(key===0 || key==="No Priority") return <BsThreeDots size={20} color='grey'/>;
    if(key===1 || key==="Low") return <MdSignalCellular1Bar size={20} color='grey'/>;
    if(key===2 || key==="Medium") return <MdSignalCellular3Bar size={20} color='grey'/>;
    if(key===3 || key==="High") return <MdSignalCellular4Bar size={20} color='grey'/>;
    if(key===4 || key==="Urgent") return <BsExclamationSquareFill size={20} color='#fc7840'/>;
}
function userId(){
 return <RxAvatar size={30} />
}
export const Card = ({data}) => {
    return (
    <>
      <div className='card'>
          <div className='top_row'>
            <div className='card_id'>
              {data.id}
            </div>
            <div className='profile_pic'>{userId()}</div>
          </div>
          <div className='mid_row'>
            <div className='card_status'>{status(data.status)}</div>
            <div className='card_title'>
              {data.title}
            </div>
          </div>
          <div className='bottom_row'>
            <div className='card_priority'>{priority(data.priority)}</div>
            <div className='tag'>
            <div className='bullet'><BsCircleFill color="grey" /></div>
            {data.tag[0]}
            </div>
          </div>
      </div>
    </>
    )
}
export {status, priority, userId};