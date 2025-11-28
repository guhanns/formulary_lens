import React from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import './layout.css'


function Layouts({children}) {
  return (
   <>
    <main className='main-container'>
        <Sidebar/>
        <Topbar/>
        
        <section className='main-section'>
            {children}
        </section>
    </main>
   </>
  )
}

export default Layouts