import React from 'react'
import "./style.css"
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
import { ReactComponent as DropDown } from '../../assets/DropDown.svg'
import { ReactComponent as Bell } from '../../assets/Bell.svg'
import { useSelector, useDispatch } from 'react-redux'

export default function Heading() {
  
  const user = useSelector((state) =>state.user)

  

  return (
    <div className='headingContainer'>
      <div className="textbox">
        <SearchIcon className="searchIcon" />
        <input type="text" className="searchInput" placeholder='Search' />
      </div>
      <div className="liveState">
        Live
      </div>
      <div className="language">
        English

        <DropDown />
      </div>

      <div className="ringBtn">
        <Bell />
      </div>
      <div className="userBox">
        <div className="userImg"></div>
        <div className="userData">
          <div className="userName">{user.name}</div>
          <div className="userID">ID: {user.id}</div>
        </div>
        <DropDown />
      </div>
    </div>
  )
}
