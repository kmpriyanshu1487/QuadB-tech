import React from 'react'
import './Tabs.css'
const Tabs = ({ selectedtab, setSelectedTab }) => {

  const tabs = ["All", "Active", "Completed"];

  return (
    <div className='tab-container'>
      <ul className='tab-lists'>
        {
          tabs.map((tab) => (
            <li className={selectedtab == tab ? `active` : ` `} onClick={() => setSelectedTab(tab)}>{tab}</li>
          ))}
      </ul>
    </div>
  )
}

export default Tabs;
