import React from 'react'
import './Header.css';

function Header({setIsAdding}){
    return(
        <header>
            <h1 style={{textAlign:'center',marginTop:'40px', color:'purple'}}>Employee Management System</h1>
            <div style={{ margintop:'30px',marginBottom:'18px' }}>
                <button onClick={()=>setIsAdding(true)} className="round-button">Add Empoloyee</button>
            </div>
        </header>
    )
}
export default Header;