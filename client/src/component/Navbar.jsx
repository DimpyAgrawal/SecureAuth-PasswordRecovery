import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const navigate = useNavigate();
    return (
        <div>

            {/* {isLoggedIn ? (<>
                    <NavLink to='/'>Home</NavLink>
                    <div onClick={() => { localStorage.clear(); navigate('/signin'); }}>Logout</div>
                
            </>

            ):(<>
                <NavLink to='/signin'>SignIn</NavLink>
                <NavLink to='/signup'>SignUp</NavLink>
                <NavLink to='/forgotpassword'>FP</NavLink>

            </>)} */}

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/signin'>SignIn</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            <NavLink to='/forgotpassword'>FP</NavLink>
            <div className='cursor-pointer' onClick={() => { localStorage.clear(); navigate('/signin'); }}>Logout</div>

        </div>
    )
}
