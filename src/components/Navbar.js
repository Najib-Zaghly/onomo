import React from 'react';
import "./Navbar.css";
// import Avatar from "./Avatar";
// import {selectUser} from "../features/userSlice";

// import {useSelector} from "react-redux"

// import  { auth } from "../service/firebase";




function Navbar() {
  // function handleClick(){
  //     auth.signOut()
      
  // }

  // const user =useSelector(selectUser)

  // const user =useSelector(selectUser);
  return (
    <div className='Navbar'>
      <div className='Logo'>

        <img alt="" src=''></img>
        {/* <a href="./" className='alfmbrouk'><h2>Alf<span>M'brouk</span></h2></a> */}
        {/* <h2>Alf<span>M'brouk</span></h2> */}

      </div>

      <a href='./'><h6>Explore</h6></a>
      <a href='./create'><h6>Messages</h6></a>
      <a href='./edit'><h6 className="switch">Switch to Selling</h6></a>

      {/* <h6>Orders</h6> */}
      {/* <Avatar onClick={()=>{auth.signOut()}} src={user.photo}/> */}
      {/* <Avatar onClick={handleClick()} src="../imgProfil.png" className="Avatar" /> */}
      
      
      
      
      {/* <button   type="button" class="btn NavBtn btn-outline-warning">Sign Out</button> */}
      {/* onClick={()=>{auth.signOut()}} */}
      {/* name={user.displayName} src={user.photo} */}
      {/* <SettingsIcon/> */}
      {/* <h6>Orders</h6> */}
      {/*  */}


{/* d4b56b */}



    </div>
  )
}

export default Navbar;