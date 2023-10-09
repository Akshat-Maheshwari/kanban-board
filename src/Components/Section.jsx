import React from 'react'
import { Card } from './Card';
import '../Style/Section.css'
import { status as statusIcon, priority as priorityIcon, userId as userIdIcon} from './Card';
import {BsThreeDots, BsPlusLg} from 'react-icons/bs';
export const Section = ({title, show, data, group}) => {
    const cards={}
    data.tickets.forEach((card)=>{
        cards[card.id]=card;
    })
    function status(){
        return (
            <div className='title'>
                <div className='col1'>
                    <div className='title_icon'>{
                        group==="priority"?priorityIcon(title)
                        :
                        group==="status"?statusIcon(title)
                        :
                        group=="userId"&&userIdIcon()
                        }</div>
                    <div className='title_name'>{title}</div>
                    <div className='item_count'>{show.length}</div>
                </div>
                <div className='col2'>
                    <BsPlusLg size={20}/>
                    <BsThreeDots size={20} />
                </div>
            </div>
        )
    }
    return (
    <>
    <div className='section'>
        <div className='title_parent'>
            {status()}
        </div>
        <div className='section_items'>
            {
                show.map((id)=>(
                    <Card key={id} data={cards[id]}/>
                ))
            }
        </div>
    </div>
    </>
  )
}
