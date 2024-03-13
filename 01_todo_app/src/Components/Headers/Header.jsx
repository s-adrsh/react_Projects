import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <header className='flex justify-between px-2'>
      <div >
        {/* <img src="" alt="" srcset="" /> */}
        <h3> Hi Tommy</h3>
        <p>your daily adventure starts now</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header