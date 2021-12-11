import React from 'react'
import { useSelector} from 'react-redux';
import MenuOptions from './MenuOptions/index';
import Logo from '../../Logo/index';
import IconToggleMenu from './IconToggleMenu/index';
import Styles from './styles.module.css';
function Menu() {
  const isMenuActive = useSelector(state => state.isMenuActive);
  return (
    <div className={`${Styles.menu_container} ${isMenuActive && Styles.menu_active}`}>
        <IconToggleMenu/>
        <Logo />
        <MenuOptions/>
      </div>
  )
}

export default Menu
