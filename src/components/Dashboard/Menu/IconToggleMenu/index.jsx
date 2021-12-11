import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./styles.module.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";


function IconToggleMenu() {
  const dispatch = useDispatch();
  const isMenuActive = useSelector(state => state.isMenuActive);
  return (
    <div className={`${Styles.iconToggleMenu_container} ${isMenuActive && Styles.active}`}>
      {isMenuActive ? (
        <AiOutlineDoubleLeft
          className={Styles.iconToggle}
          onClick={() => dispatch({type:'MENU_ACTIVE/TOGGLE'})}
        />
      ) : (
        <AiOutlineDoubleRight
          className={Styles.iconToggle}
          onClick={() => dispatch({type:'MENU_ACTIVE/TOGGLE'})}
        />
      )}
    </div>
  );
}

export default IconToggleMenu;
