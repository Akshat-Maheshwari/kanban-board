import React from 'react';
import { FillUsers, FillStatus } from '../Utility/Utils';
import { Section } from './Section';
import '../Style/Dashboard.css';

export default function Dashboard({show,data,group}) {
  const titles={"priority":["No Priority","Low","Medium","High","Urgent"],
                "userId":FillUsers(data),
                "status":FillStatus(data)
                }
  return (
    <>
    <div className='dashboard'>
      {
        Object.keys(show).map((key) => (
          <Section key={key} title={titles[group][key]} show={show[key]} data={data} group={group} />
        ))
      }
    </div>
    </>
  )
}
