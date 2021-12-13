import React from 'react'
import { useSelector} from 'react-redux';
import MenuOptions from './MenuOptions/index';
import Logo from '../Logo/index';
import IconToggleMenu from './IconToggleMenu/index';
import Styles from './styles.module.css';
function Menu() {
  const isMenuActive = useSelector(state => state.isMenuActive);
  const color_theme = useSelector(state => state.colorTheme);
  return (
    <div className={`${Styles.menu_container} ${isMenuActive && Styles.menu_active} ${Styles[color_theme]}`}>
        <IconToggleMenu/>
        <Logo />
        <MenuOptions/>
      </div>
  )
}

export default Menu
