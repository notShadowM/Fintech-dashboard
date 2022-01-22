import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';
import { ReactComponent as DropDown } from '../../assets/DropDown.svg';
import { ReactComponent as Bell } from '../../assets/Bell.svg';
import { changeLang } from '../../features/languages/languages';

export default function Heading() {
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.languages);
  const dispatch = useDispatch();

  const handleLanguageChange = () => {
    dispatch(changeLang());
  };
  return (
    <div className="headingContainer">
      <div className="textbox">
        <SearchIcon className="searchIcon" />
        <input type="text" className="searchInput" placeholder="Search" />
      </div>
      <div className="liveState">
        Live
      </div>
      <div className="language" onClick={handleLanguageChange}>
        {lang[lang.selected].lang}

        <DropDown />
      </div>

      <div className="ringBtn">
        <Bell />
      </div>
      <div className="userBox">
        <div className="userImg" />
        <div className="userData">
          <div className="userName">{user.name}</div>
          <div className="userID">
            ID:
            {' '}
            {user.id}
          </div>
        </div>
        <DropDown />
      </div>
    </div>
  );
}
